
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaModule
 */
var mediaModule = angular.module("app.media", [
  'ngFileUpload',
]);

'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.factory('Medias', [ 'Upload', 'Environment', '$resource',
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


})(window, _, window.angular);
