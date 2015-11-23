'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('productResource', ['resourceService', 'mediaResource', 'variantResource', 'productThemes',
    
    function(resourceService, mediaResource, variantResource) {
        var productResource = resourceService('product');
        
        productResource.prototype.selectTheme = function(theme) {
            this.theme = theme;
            if(this.themes === null) {
                this.variants = [];
                this.variant_options = [];
            } else {
                this.variant_options = productThemes.getOptions(theme);
            }
        }
        
        productResource.prototype.themeDropdownList = function() {
            return productThemes.getDropdownList();
        }
        
        productResource.prototype.generateVariants = function() {
            function generateVariants(key, data) {
                var options = this.variant_options;
                angular.forEach(options[key].items, function(value, index) {
                    var item = angular.copy(data);
                    item.push(index);
                    if(angular.isUndefined(options[key + 1])) {
                        item = new variantResource({
                            price: 0,
                            sale: 0,
                            quantity: 0,
                            option: item
                        });
                        this.variants.push(item);
                    } else {
                        generateVariants(key + 1, data);
                    }
                })
            }
            
            generateVariants.call(this, 0, []);
        }
        
        productResource.prototype.removeVariant = function(variant) {
            var index = this.variants.indexOf(variant);
            variant.$remove();
            this.variant.splice(index, 1);
        }
        
        productResource.prototype.getVariantDefault = function() {
            var variants = this.variants;
            if(!angular.isUndefined(variants) && variants.length > 0) {
                return variants[0];
            }
            return this.current;
        }
        
        
        productResource.prototype.upload = function(file) {
            var variant = this.getVariantDefault();
            variant.medias = variant.medias || [];
            variant.medias.push(file);
            variant.upload = mediaResource.upload(file);
            // Success
            file.upload.success(function(data, status, headers, config ) {
                file = new mediaResource(data);
                if(variant.id) {
                    variant.$save();
                }
            });
            // Progress
            file.upload.progress(function(evt) {
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            })
        }
        
        productResource.prototype.removeFile = function(file) {
            var variant = this.getVariantDefault();
            var index = variant.medias.indexOf(file);
            file.$remove();
            variant.medias.splice(index, 1);
            if(variant.id) {
                variant.$save();
            }
            
        }
        return productResource;
    }
]);
