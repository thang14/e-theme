'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Product', ['productResource',
  function(productResource) {
    return angular.extend(BaseModel, {
      instance:productResource
    })
  }
]);

