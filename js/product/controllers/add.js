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
    description_list: [],
    description: [],
    keywords: [],
    attrs: [],
    shipping: {},
    variant_options: [],
    variants: [],
    status: 'private',
    template: null,
}

var Controller = function($scope, $rootScope, productService, mediaService, 
 $controller, variantOption, Constants) {
    
    // product default attribute  
    $scope.item = ProductAttributes;
    
    //extend abstractDetailController
    agular.extend(this, $controller('abstractDetailController',{
            $scope: $scope,
            itemService: productService
        })
    });
    
    // delete file
    $scope.deleteFile = function(file) {
        mediaService.delete(file.id);
        $scope._onFileDelete(file);
    }
    
    // on uploaded
    $scope._onUploaded = function(data) {
        $scope.item.current.medias.push(data.data);
    }
    
    // on delete file
    $scope._onFileDelete = function(file) {
        var index = $scope.item.current.medias.indexOf(file);
        $scope.item.current.medias.splice(index, 1);
    }
    
}

Controller.$inject = [
    '$scope',
    '$rootScope',
    'productService',
    'mediaService',
    '$controller',
    'variantOption',
    'Constants'
];

productModule
.controller('productAddController', Controller);
