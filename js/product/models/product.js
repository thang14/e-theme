'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Product', $ProductProvider);

function $ProductProvider() {
  
  this.resource = null;
  
  
  /**
   * @appdoc service
   * @name $cookies
   *
   * @description
   * Provides read/write access to browser's products.`
   */
  this.$get = ['productResource', function(productResource) {
    this.resource = productResource;
  }]
  
  
  
  
}
