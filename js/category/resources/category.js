'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('mediaResource', [ 'Upload', 'Environment', '$resource',
    function(Upload, Environment, $resource) {
        var api = Environment.settings.domain+'/media';
        
        var mediaService = $resource(api+'/:id', {id: '@id'});
        mediaService.upload = function($file, callback) {
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
