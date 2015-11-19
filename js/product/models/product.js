'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 
var ProductModel = function() {
 this.items = [];
 this.item = null;
 this._service = null;
}
 
/**
 * Load Product List
 * @param Object|null params The param builder query
 * @return void(0)
 */
ProductModel.prototype.load= function(params) {
  this._service.get(params, function(res) {
    this.items = res.data;
  });
}
 
/**
 * Gets product detail
 * @param string id The Id of product item
 * @return void(0)
 */
ProductModel.prototype.get= function(id) {
  this.item = this._service.get({id: id});
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
            .success(this._handleUploaded,bind(this));
    });
  }
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
