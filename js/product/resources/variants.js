'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule.factory('Variants', ['resourceService', 'Medias'
    function(resourceService) {
        var Variant = resourceService('variant');
        
        Variant.forProduct = function(id, successcb, errorcb) {
            return Variant.query({product_id: id}, successcb, errorcb);
        }
        /**
         * Upload media
         * @param object mefiledia
         */
        Variant.prototype.upload = function($files) {
            if($files && $files.length > 0) {
                this.medias = this.medias || [];
                $files.forEach(function(file) {
                    this.medias.push(file);
                    file.upload = Medias.upload(file);
                    // Success
                    file.upload.success(function(data, status, headers, config) {
                        file = data;
                        if(this.id) {
                            this.$save();
                        }
                    }.bind(this));
                    // Progress
                    file.upload.progress(function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                });
            }
        }
        
        /**
         * Remove media
         * @param object media
         */
        Variant.prototype.removeMedia = function(media) {
            var idx = this.medias.splice(media);
            if(idx >= 0) {
                media.$remove();
                if(this.id) {
                    this.$save();
                }
                this.medias.splice(idx, 1);
            }
        }
        return Variant;
    }
]);
