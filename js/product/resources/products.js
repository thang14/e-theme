'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('Products', ['resourceService', 'Variants', 'productTemplates',

    function(resourceService, Variants, productTemplates) {

        var Products = resourceService('product');

        Products.forSection = function(id) {
            return this.query({section_id: id});
        }

        Products.prototype.selectTemplate = function(template) {
            var names = productTemplates.templates[template];

            if(angular.isUndefined(names) || !this.isNew()) {
                return;
            }

            this.variants = [];
            var options = [];
            angular.forEach(names, function(name) {
                options.push({
                    name: name,
                    label: productTemplates.labels[name],
                    values: []
                })
            });
            this.variant_options = options;
        }

        Products.prototype.getPriceSale = function() {
            return this.price -( this.price * (this.sale/100) );
        }


        Products.prototype.getTemplateDropdownList = function() {
            return productTemplates.getDropdownList();
        }

        Products.prototype.generateVariants = function() {
            if(!this.isNew()) {
                return false;
            }
            this.variants = [];
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
                        generateVariants.call(this, key + 1, item);
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


        Products.prototype.getVariantLabel = function(variant) {
            return variant.getOptionLabel(this);
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

        Products.prototype.getVariant = function() {
            var variants = this.variants;
            if(!angular.isUndefined(variants) && variants.length > 0) {
                return variants[0];
            }
            return this.variant;
        }


        Products.prototype.upload = function(file) {
            return this.getVariant().upload(file);
        }

        Products.prototype.removeFile = function(file) {
            return this.getVariant().removeFile(file);
        }

        Products.prototype.isNew = function() {
            return (this.id == undefined);
        }
        return Products;
    }
]);
