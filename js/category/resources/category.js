'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('Categories', [ 'resourceService',
    function(Upload, Environment, $resource) {
        var Categories = resourceService('category');
        return Categories;
    }
]);
