
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('Products', ['resourceService', 'Variants', 'productTemplates',

    function(resourceService, mediaResource, Variants) {

        var Products = resourceService('product');

        Products.forSection = function(id) {
            return this.query({section_id: id});
        }

        Products.prototype.selectTemplate = function(template) {
            if(!this.isNew()) {
                return false;
            }

            if(template === this.template) {
                return;
            }

            if(template === null) {
                this.variants = [];
                this.variant_options = [];
                return;
            }

            var options = [];
            var names = productTemplates.templates[template];
            angular.forEach(names, function(name) {
                options.push({
                    name: name,
                    label: productTemplates.labels[name],
                    values: []
                })
            });
            this.variant_options = options;
        }

        Products.prototype.templateDropdownList = function() {
            return productTemplates.getDropdownList();
        }

        Products.prototype.generateVariants = function() {
            if(!this.isNew()) {
                return false;
            }
            function generateVariants(key, data) {
                var options = this.variant_options;
                angular.forEach(options[key].values, function(value, index) {
                    var item = angular.copy(data);
                    item.push(index);
                    if(angular.isUndefined(options[key + 1])) {
                        this.variants.push(new Variants({
                            price: 0,
                            sale: 0,
                            quantity: 0,
                            option: item
                        }));
                    } else {
                        generateVariants(key + 1, data);
                    }
                }, this)
            }

            generateVariants.call(this, 0, []);
        }

        Products.prototype.removeVariant = function(variant) {
            var index = this.variants.indexOf(variant);
            if(variant.id) {
                variant.$remove();
            }
            this.variant.splice(index, 1);
        }



        Products.prototype.removeVariantOption = function(a1, a2) {
            this.variants.forEach(function(obj) {
                if(typeof obj.option === "Array") {
                    if(a1 && angular.isUndefined(a2)) {
                        obj.option.splice(a1, 1);
                        if(obj.option.length === 0) {
                            this.removeVariant(obj);
                        } else {
                            obj.$save();
                        }
                    }

                    if(a1 && a2) {
                        obj.option[a1].splice(a2, 1);
                        obj.$save();
                    }
                }
            }, this)
        }

        Products.prototype.getVariantDefault = function() {
            var variants = this.variants;
            if(!angular.isUndefined(variants) && variants.length > 0) {
                return variants[0];
            }

            if(!this.variant instanceof Resource) {
                this.variant = new Variants(this.variant);
            }
            return this.variant;
        }


        Products.prototype.upload = function(file) {
            return this.getVariantDefault().upload(file);
        }

        Products.prototype.removeFile = function(file) {
            return this.getVariantDefault().removeFile(file);
        }

        Products.prototype.isNew = function() {
            return (this.id != undefined);
        }
        return Products;
    }
]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule.factory('Variants', ['resourceService', 'Medias', '$q',
    function(resourceService, $q) {
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


})(window, _, window.angular);
