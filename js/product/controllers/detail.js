'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */


var ProductDetailController = function($scope, ProductModel, $stateParams) {
    
    $scope.resource = ProductModel.item;
    
    //Gets product detail
    ProductModel.get($stateParams.id);
}

Controller.$inject = [
    '$scope',
    'ProductModel',
    '$stateParams'
];

productModule
    .controller('productDetailController', ProductDetailController);
