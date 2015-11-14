'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */
 

var ProductAddController = function($scope, $rootScope, productService, mediaService, 
 $controller, variantOption, Constants) {
    $scope.item = {
        name: "",
        price: 0,
        sale: 50,
        quantity: 0,
        description_list: [],
        description: [],
        keywords: [],
        attrs: [],
        shipping: [],
        variant_options: [],
        variants: []
    };
}



productModule
.controller('productAddController', [
    '$scope',
    '$rootScope',
    'productService',
    'mediaService',
    '$controller',
    'variantOption',
    'Constants',
    ProductAddController,
]);
