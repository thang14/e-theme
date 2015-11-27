
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaModule
 */
var mediaModule = angular.module("app.media", []);

'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.service('mediaService', [ 'Upload', 'Environment', '$http',
    function(Upload, Environment, $http) {
        return {
            
            /**
             * Upload file
             */
            upload: function($file, callback) {
                var api = Environment.settings.domain+'/media';
                return Upload.upload({
                    url: api,
                    data: {
                        file: $file,
                    },
                }).success(callback);
            },
            
            // Remove file
            remove: function($id) {
                var api = Environment.settings.domain+'/media';
                $http.delete(api,{
                    id: $id
                });
            },
        }
    }
]);


})(window, window.angular);
