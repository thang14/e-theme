'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('categoryResource', [ 'Upload', 'Environment', '$resource',
    function(Upload, Environment, $resource) {
        var api = Environment.settings.domain+'/media';
        
        var categoryResource = $resource(api+'/:id', {id: '@id'});
        categoryResource.upload = function($file, callback) {
            return Upload.upload({
                url: api,
                data: {
                    file: $file,
                },
            }).success(function(res) {
                res = new mediaService(res);
                callback ? callback(res) : null;
            });
            
        }
        
        return mediaService;
    }
]);
