'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('Products', ['resourceService', 'Variants', 'productTemplates',
    
    function(resourceService, mediaResource, variantResource) {
        
        var caches = {};
        
        var productResource = resourceService('product');
        
        productResource.prototype.selectTemplate = function(template) {
            
            
            if(template === this.template) {
                return;
            }
            
            if(template === null) {
                this.variants = [];
                this.variant_options = [];
                return;
            }
            
            var key = 'template_' + template;
            if(angular.isUndefined(caches[key])) {
                caches[key] = [];
                var names = productTemplates.templates[template];
                angular.forEach(names, function(name) {
                    caches[key].push({
                        name: name,
                        label: productTemplates.labels[name],
                        values: []
                    })
                })
            }
            this.variant_options = caches[key];
        }
        
        productResource.prototype.templateDropdownList = function() {
            return productTemplates.getDropdownList();
        }
        
        productResource.prototype.generateVariants = function() {
            function generateVariants(key, data) {
                var options = this.variant_options;
                angular.forEach(options[key].values, function(value, index) {
                    var item = angular.copy(data);
                    item.push(index);
                    if(angular.isUndefined(options[key + 1])) {
                        cacheKey = 'variant_' + item.join('_');
                        if(angular.isUndefined(caches[cacheKey])) {
                            caches[cacheKey] = new variantResource({
                                price: 0,
                                sale: 0,
                                quantity: 0,
                                option: item
                            });
                        }
                        this.variants.push(caches[cacheKey]);
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
            
            if(!this.variant instanceof Resource) {
                this.variant = new variantResource(this.variant);
            }
            return this.variant;
        }
        
        
        productResource.prototype.upload = function(file) {
            return this.getVariantDefault().upload(file);
        }
        
        productResource.prototype.removeFile = function(file) {
            return this.getVariantDefault().removeFile(file);
        }
        return productResource;
    }
]);
