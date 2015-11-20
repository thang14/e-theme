'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Product', ['model', 'productResource',
  function(productResource) {
    return angular.extend(model, {
      resource:productResource
    })
  }
]);

