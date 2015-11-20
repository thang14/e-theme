'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
sectionModule.provider('Section', ['Model', 'sectionResource',
  function(Model, sectionResource) {
    return new Model(sectionResource);
  }
]);
