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
 */
ProductModel.prototype.load= function(params) {
  this._service.get(params, function(res) {
    this.items = res.data;
  });
}
 
/**
 * Load Product List
 */
ProductModel.prototype.get= function(id) {
  this.item = this._service.get({id: id});
}


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
