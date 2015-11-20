'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 
var ProductModel = function() {
 this.items = [];
 this.total = 0;
 this.item = null;
 this._sectionService = null;
 this._productService = null;
 this._mediaService = null;
 this._variantService = null;
}


/**
 * Init
 */
ProductModel.prototype.init = function() {
  this.sections = this._sectionService.get();
}


/**
 * Select variant themes
 */
ProductModel.prototype.selectTheme = function(index) {
  this.item.variant_options = this.item.variant_options : [];
  if(this.themes[index] == undefined) {
    this.item.theme = null;
    return;
  }
  var options = this.themes[index];
  options.forEach(function(values) {
    values.forEach(function(value) {
      this.item.variant_options.push({
        name: value,
        label: this.variantOptionLabels[value],
        items: []
      });
    }, this)
  }, this);
}

/**
 * Select variant themes
 */
ProductModel.prototype.generateVariant = function(key, data) {
  
  key = key || 0;
  if(key === 0) {
    this.item.variants = [];
  }
  
  var options = this.item.variant_options;
  data = data || [];
  options.items.forEach(function(value, index) {
    var item = angular.copy(data);
    item.push(index);
    if(options[index + 1] == undefined) {
      this.item.variants = this.item.variants || [];
      this.item.variants.push({
        options: item,
        price: 0,
        sale: 0,
        quantity: 0
      });
      return;
    }
    this.generateVariant(key + 1, item);
  }, this);
}
 
/**
 * Load Product List
 * @param Object|null params The param builder query
 * @return void(0)
 */
ProductModel.prototype.load= function(params, callback) {
  this._productService.get(params, function(res) {
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
  if(id != undefined) {
    this.item = this._productService.get({id: id}, callback);
    return;
  }
  this.item = this._productService.create();
}



/**
 * Upload
 * @param Array files
 * @return void(0)
 */
ProductModel.prototype.upload= function($files) {
  if($files && $files.length > 0) {
    $files.forEach(function(file, index) {
        this._mediaService.upload(file)
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
  file.$remove(function() {
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


(function() {
  

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
    $get: [
     'productService', 
     'sectionService', 
     'mediaService', 'variantService', function(productService, sectionService, mediaService, variantService) {
      this.instance._service = productService;
      this.instance._sectionService = sectionService;
      this.instance._mediaService = mediaService;
      this.instance._variantService = variantServive;
      this.instance.init();
      return this.instance;
    }]
  }
  
  productModule.provider('productModel', ProductModelProvider);
  
})
