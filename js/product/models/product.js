'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 

var Product = function() {
 this.items = [];
 this.total = 0;
 this.current = null;
 
 this._resource = null;
}

/**
 * Load Product List
 * @param Object|null params The param builder query
 * @return void(0)
 */
Product.prototype.$query= function(params, callback) {
  this._resource.$get(params, function(res) {
    res.data.forEach(function(item) {
      this.items.push(new this._resource(item));
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
    this.current = this._resource.get({id: id});
  } else {
   this.current = new this._resource();
  }
  return this;
}



(function() {
  

  /**
   * Product model, provider since all products
   * in the application use the same model
   */
  var ProductProvider = function() {
    
    instance: new BaseModel(),
    
    /**
     * Initialize and configure ProductModel
     * @return ProductModel
     */
    $get: ['productResource', function(productResource) {
      this.instance._resource = productResource;
      return this.instance;
    }]
  }
  
  productModule.provider('Product', productResource);
  
})
