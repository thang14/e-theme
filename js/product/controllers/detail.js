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
    'productModel',
];

productModule
.controller('productDetailController', Controller);
