'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantDetailController
 */

var Model = function(variantService){
    
    var Variant = function(data) {
        this.template = null;
        this.items = [];
        this.options = [];
    }
    
    Variant.optionValues = {
        'size_name': "Kích thước",
        'color_name': "Màu sắc",
        'style_name': "Kiểu dáng",
        'configure': "Cấu hình"
    };
    
    Variant.templateList = [
        ['color_name'],
        ['size_name'],
        ['style_name'],
        ['configure_name'],
    
    
        ['color_name', 'size_name'],
        ['color_name', 'stype_name'],
        ['color_name', 'configure_name'],
        ['color_name', 'size_name', 'style_name'],
        ['color_name', 'size_name', 'configure_name'],
    
        ['size_name', 'style_name'],
        ['size_name', 'configure_name'],
        ['size_name', 'style_name', 'configure_name'],
    
        ['style_name', 'configure_name'],
    ];
    
    //Template values
    Variant.templateValues = [];
    Variant.templateList.forEach(function(values) {
        var results = [];
        values.forEach(function(value) {
            results.push(Variant.optionValues[value]);
        });
        Variant.templateValues.push(results.join(', '));
    });
    
    
    // Select template
    Variant.prototype.selectTemplate = function(id) {
        if(!Variant.templateList[id]) {
            this.template = null;
            this.options = [];
            return;
        }
        this.options = [];
        var optionNames = Variant.templateList[id];
        optionNames.forEach(function(value, index) {
            this.options.push({
                name: value,
                label: Variant.optionValues[value],
                items: []
            })
        }, this);

    }
    
    Variant.prototype.get = function(id) {
        return variantService.get({product_id: id});
    }
    
    Variant.prototype.generateVariants = function(key, data) {
        key = key || 0;
        if(key === 0) {
            this.items = [];
        }

        var options = this.options;
        data = data || [];
        (options[key].items).forEach(function(value, index) {
            var item = angular.copy(data);
            item.push(index);
            if(!options[key + 1]) {
                this.items.push({
                    options: item,
                    price: 0,
                    sale: 0,
                    quantity: 1,
                });
                return;
            }
            this.generateVariants(key + 1, item);
        });
    }

    
    return Variant;
}

Model.$inject = [
    'variantService'
];

variantModule.factory('variantModel', Model);
