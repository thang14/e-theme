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
  this.$get = ['Model', 'productResource', function(Model, resource) {
    return new Model({
      resource: resource
    })
  }]
  
  
  /**
   * @appdoc service
   * @name $cookies
   *
   * @description
   * Provides read/write access to browser's products.`
   */
  this.load = function() {
    this.items = this.resource.$get({
      page: this.currentPage,
    });
  }
  
}
