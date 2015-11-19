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

var Controller = function($scope, $rootScope, $stateParams, $state, productService, mediaService,
 $controller, variantOption, Constants, sectionService, variantModel) {
    $scope.route = {
        name: 'product'
    }
    
    
    
    $scope.itemDefault = ProductAttributes;
    
    // Extend baseDetailController
    angular.extend($controller('baseDetailController',{
        service: productService,
        $scope: $scope
    }), this);
    
    
     // Section
    $scope.sections = sectionService.get();
    
    // Variant Model
    $scope.variant = new variantModel({
        items: $scope.item.variants,
        template: $scope.item.template,
        options: $scope.item.options;
    });
    
    
    $scope.templateValues = variantModel.templateValues;
    
    // Media
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
    'Constants',
    'sectionService',
    'variantModel'
];

productModule
.controller('productDetailController', Controller);
