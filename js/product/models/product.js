'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Product', ['Model', 'productResource',
  function(Model, productResource) {
    return new Model(productResource);
  }
]);

