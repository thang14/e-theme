'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 
var ProductModel = function() {
 this.items = [];
 this.total = 0;
 this.item = null;
 this.sections = sectionService.get();
 this._service = null;
}
 
/**
 * Load Product List
 * @param Object|null params The param builder query
 * @return void(0)
 */
ProductModel.prototype.load= function(params, callback) {
  this._service.get(params, function(res) {
    this.items = res.data;
    this.total = res.total;
    callback ? callback(res) : '';
  });
}
 
/**
 * Gets product detail
 * @param string id The Id of product item
 * @return void(0)
 */
ProductModel.prototype.get= function(id, callback) {
  this.item = this._service.get({id: id}, callback);
}



/**
 * Upload
 * @param Array files
 * @return void(0)
 */
ProductModel.prototype.upload= function($files) {
  if($files && $files.length > 0) {
    $files.forEach(function(file, index) {
        mediaService.upload(file)
            .success(this._handleUploaded.bind(this));
    });
  }
}

/**
 * Select Media;
 * @param integer index
 * @return void(0)
 */
ProductModel.prototype.selectMedia= function(index) {
  if(this.item.media_default) {
    this.item.medias[this.item.media_default].selected = false;
  }
  this.item.medias[index].selected = true;
}

/**
 * Uploaded
 * @param Array files
 * @return void(0)
 */
ProductModel.prototype._handleUploaded= function(res) {
  this.item.medias = this.item.medias || [];
  this.item.medias.push(res);
}

/**
 * deleteFile
 * @param Array files
 * @return void(0)
 */
ProductModel.prototype.deleteFile= function(index) {
  var file = this.item.medias[index];
  mediaService.$remove({id: file.id}, function() {
    this._handleFileDeleted(index);
  }.bind(this));
}

/**
 * File Deleted
 * @param Array files
 * @return void(0)
 */
ProductModel.prototype._handleFileDeleted= function(index) {
  this.item.medias.splice(index, 1);
}

/**
 * Product model, provider since all products
 * in the application use the same model
 */
var ProductModelProvider = function() {
  
  instance: new ProductModel(),
  
  /**
   * Initialize and configure ProductModel
   * @return ProductModel
   */
  $get: ['productService', function(productService) {
    this.instance._service = productService;
    return this.instance;
  }]
}

productModule.provider('productModel', ProductModelProvider);
