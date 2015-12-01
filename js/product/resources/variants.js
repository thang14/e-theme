'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule.factory('Variants', ['resourceService', 'Medias', '$q', 'productTemplates',
    function(resourceService, $q, productTemplates) {
        var Variant = resourceService('variant');

        Variant.forProduct = function(id, successcb, errorcb) {
            return Variant.query({product_id: id}, successcb, errorcb);
        }

        Variant.prototype.getOptionLabel = function(instance) {
            var text = [];
            angular.forEach(this.option, function(value, index) {
                text.push(instance.variant_options[index].values[value].text);
            });
            return text.join(" >> ");
        }

        /**
         * Upload media
         * @param object mefiledia
         */
        Variant.prototype.upload = function($files) {
            if($files && $files.length > 0) {
                var promises = []
                this.medias = this.medias || [];
                $files.forEach(function(file) {
                    var deffered  = $q.defer();
                    this.medias.push(file);
                    file.upload = Medias.upload(file);
                    // Success
                    file.upload.success(function(data, status, headers, config) {
                        file = data;
                        deffered.resolve(data);
                    }.bind(this));
                    // Error
                    file.upload.error(function(error){
                        deffered.reject();
                    });
                    // Progress
                    file.upload.progress(function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });

                    promises.push(deffered.promise);
                }, this);

                $q.all(promises)
                .then(function() {
                    if(this.id) {
                        this.$save();
                    }
                }.bind(this));
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
