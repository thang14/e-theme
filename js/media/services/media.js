'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.service('mediaService', [ 'Upload', 'baseService'
    function(Upload, collectionService) {
        return angular.extend(baseService, {
            collectionName: "media",
            upload: function($file, callback) {
                var api = this.getCollection().api;
                return Upload.upload({
                    url: api,
                    data: {
                        file: $file,
                    },
                }).success(callback);
            },
            uploadAll: function($files, callback) {
                $files.forEach(function(file) {
                    this.upload(file, callback);
                }, this);
            }
        });
    }
]);
