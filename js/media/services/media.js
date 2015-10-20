'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.service('mediaService', [ 'Upload', 'Environment', '$http'
    function(Upload, Environment, $http) {
        return {
            upload: function($file, callback) {
                var api = Environment.settings.domain+'/media';
                return Upload.upload({
                    url: api,
                    data: {
                        file: $file,
                    },
                }).success(callback);
            },
            
            remove: function($id) {
                var api = Environment.settings.domain+'/media';
                $http.delete($id,{
                    id: $id
                });
            },
        }
    }
]);
