'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */


var Controller = function($scope, ProductModel) {
    
    $scope.productModel = ProductModel;
}

Controller.$inject = [
    '$scope',
    'ProductModel',
];

productModule
    .controller('productDetailController', Controller);
