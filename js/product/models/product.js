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
  this.$get = ['productResource', function(productResource) {
    return {
      /**
       * @appdoc method
       * @name Product#get
       *
       * @description
       * Returns the value of given product id
       *
       * @param {string} id Id to use for lookup.
       * @returns {string} Raw product value.
       */
      get: function(id) {
        return productResource.get({id: id});
      }
      
      /**
       * @appdoc method
       * @name Product#getAll
       *
       * @description
       * Returns the values of given collection
       *
       * @param {string} id Id to use for lookup.
       * @returns {string} Raw products value.
       */
      getAll: function(id) {
        return productResource.get();
      }
      
      
      /**
       * @appdoc method
       * @name Product#getAll
       *
       * @description
       * Returns the values of given collection
       *
       * @param {string} id Id to use for lookup.
       * @returns {string} Raw products value.
       */
      query: function(params) {
        return productResource.get(params);
      }
    }
  }]
  
  
  
  
}
