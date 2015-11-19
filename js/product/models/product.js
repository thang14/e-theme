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


productModule.factory('productModel', ProductModel);
