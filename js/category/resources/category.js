'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('categoryResource', [ 'Upload', 'Environment', '$resource',
    function(Upload, Environment, $resource) {
        var api = Environment.settings.domain+'/media';
        
        var categoryResource = $resource(api+'/:id', {id: '@id'});
        return mediaService;
    }
]);
