'use strict';

/**
 * @name            OnhanhMedia
 * @description     MediaService
 */
mediaModule.service('mediaService', [ 'Upload', 'collectionService'
    function(Upload, collectionService) {
        return {
            getCollection: function() {
                return collectionService.getCollection('media');
            },
            
            upload: function($file, callback) {
                var api = this.getCollection().api;
                return Upload.upload({
                    url: api,
                    file: $file,
                }).success(callback);
            },
            
            uploadAll: function($files, callback) {
                $files.forEach(function(file) {
                    this.upload(file, callback);
                }, this);
            },
            
            remove: function($id) {
                return this.getCollection()
                            .remove({id:$id});
            }
        }
    }
]);
