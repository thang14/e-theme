'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('productResource', [
  function(productResource) {
    return angular.extend(BaseModel, {
      instance:productResource
    })
  }
]);

