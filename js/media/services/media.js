'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.service('mediaService', [ 'Upload', 'Environment'
    function(Upload, Environment) {
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
            
        }
    }
]);
