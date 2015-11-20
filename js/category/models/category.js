'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.provider('Category', [ 'Model', 'categoryResource',
    function(Model, categoryResource) {
        return new Model(categoryResource);
    }
]);
