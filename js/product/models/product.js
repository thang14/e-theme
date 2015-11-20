'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 

var ProductModel = function() {
 this.items = [];
 this.total = 0;
 this.current = null;
 this._service = null;
}

/**
 * Load Product List
 * @param Object|null params The param builder query
 * @return void(0)
 */
Product.prototype.$load= function(params, callback) {
  this._service.get(params, function(res) {
    res.data.forEach(function(item) {
      this.items.push(this._service.create(item));
    }, this);
    this.total = res.total;
    callback ? callback(this) : '';
  });
  
  return this;
}
 
/**
 * Gets product detail
 * @param string id The Id of product item
 * @return void(0)
 */
Product.prototype.$get= function(id, callback) {
  if(id != undefined) {
    this.current = this._service.get({id: id});
  } else {
   this.current = this._service.create();
  }
  return this;
}



(function() {
  

  /**
   * Product model, provider since all products
   * in the application use the same model
   */
  var ProductProvider = function() {
    
    instance: new Product(),
    
    /**
     * Initialize and configure ProductModel
     * @return ProductModel
     */
    $get: [
     'productService', function(productService) {
      this.instance._service = productService;
      return this.instance;
    }]
  }
  
  productModule.provider('Product', ProductProvider);
  
})
