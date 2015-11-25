'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('Category', [ 'resourceService',
    function(Upload, Environment, $resource) {
        var Category = resourceService('category');
        return Category;
    }
]);
