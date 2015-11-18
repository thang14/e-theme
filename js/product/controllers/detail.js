'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */


var ProductAttributes = {
    name: null,
    current: {
        price: 0,
        sale: 0,
        quantity: 1,
    },

    media_display: 0,

    medias: [{
        path:"/admin-theme/examples/images/1.jpg",
        display: true
    }, {
        path:"/admin-theme/examples/images/2.jpg",
        display: false
    }],
    description_list: [],
    description: [],
    keywords: null,
    attrs: [{}],
    variant_options: [],
    variants: [],
    status: 0,
    template: null,
}

// list template
var templates = [


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

var variantOptionValues = {
    color_name: "Màu sắc",
    size_name: "Kích thước",
    style_name: "Kiểu dáng",
    configure_name: "Cấu hình"
};

var Controller = function($scope, $rootScope, $stateParams, $state, productService, mediaService,
 $controller, variantOption, Constants) {
    $scope.route = {
        name: 'product'
    }
    
    $scope.itemDefault = ProductAttributes;
    
    // Extend baseDetailController
    angular.extend($controller('baseDetailController',{
        service: productService,
        $scope: $scope
    }), this);
    
    $rootScope.product = $scope.item;
    
    //Template values
    $scope.templateValues = [];
    templates.forEach(function(values) {
        var results = [];
        values.forEach(function(value) {
            results.push(variantOptionValues[value]);
        });
        $scope.templateValues.push(results.join(', '));
    });
    
    $scope.selectTemplate = function(id) {
        if(!templates[id]) {
            $scope.item.template = null;
            $scope.item.variant_options = [];
            return;
        }
        $scope.item.variant_options = [];
        var variantOptionNames = templates[id];
        variantOptionNames.forEach(function(value, index) {
            $scope.item.variant_options.push({
                name: value,
                label: variantOptionValues[value],
                items: []
            })
        });

    }

    $scope.generateVariants = function(key, data) {
        key = key || 0;
        if(key === 0) {
            $scope.item.variants = [];
        }

        var options = $scope.item.variant_options;
        data = data || [];
        (options[key].items).forEach(function(value, index) {
            var item = angular.copy(data);
            item.push(index);
            if(!options[key + 1]) {
                $scope.item.variants.push({
                    options: item,
                    price: 0,
                    sale: 0,
                    quantity: 1,
                });
                return;
            }
            $scope.generateVariants(key + 1, item);
        });
    }

    $scope.setMediaDefault = function(index) {
        if($scope.item.media_display === index) {
            return;
        }
        $scope.item.medias[$scope.item.media_display].display = false;
        $scope.item.media_display = index;
        $scope.item.medias[index].display = true;
    }

    $scope.getVariantOptionValues = function(options) {
        var result = [];
        options.forEach(function(value, index) {
            result.push($scope.item.variant_options[index].items[value].text);
        });
        return result.join(">>");
    }


    // File Medias
    $scope.deleteFile = function(index) {
        var media = $scope.item.medias[index];
        $scope._handleFileDelete(index);
    }

    // upload
    $scope.upload = function($files) {
        if($files) {
            $files.forEach(function(file) {
                mediaService.upload(file).success($scope._handleUploaded);
            });
        }
    }

    // on uploaded
    $scope._handleUploaded = function(data) {
        $scope.item.medias.push(data.data);
    }

    // on delete file
    $scope._handleFileDelete = function(index) {
        $scope.item.medias.splice(index, 1);
    }
}

Controller.$inject = [
    '$scope',
    '$rootScope',
    '$stateParams',
    '$state',
    'productService',
    'mediaService',
    '$controller',
    'variantOption',
    'Constants'
];

productModule
.controller('productDetailController', Controller);
