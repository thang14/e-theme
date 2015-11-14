'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */

var ProductAttributes = {
    name: "",
    price: 0,
    sale: 0,
    quantity: 1,
    description_list: [],
    description: [],
    keywords: [],
    attrs: [],
    shipping: {},
    variant_options: [],
    variants: [],
    status: 'private'
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
