'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.provider('Variant', ['Model', 'variantResource',
  function(Model, variantResource) {
    return new Model(variantResource);
  }
]);
