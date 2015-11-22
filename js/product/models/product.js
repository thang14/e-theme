'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Product', $ProductProvider);

function $ProductProvider() {
  /**
   * @appdoc service
   * @name $cookies
   *
   * @description
   * Provides read/write access to browser's products.`
   */
  this.$get = ['Model', 'productResource', function(Model, resource) {
    
    /**
     * +items
     * +current
     */
    var model =  new Model({
      resource: resource
    });
    
    
    model.remove
    
    return model;
  }]
  
  
}
