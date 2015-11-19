'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */


var Controller = function($scope, ProductModel, $stateParams) {
    
    $scope.productModel = ProductModel;
    
    if($stateParams.id != undefined) {
        $scope.productModel.get($stateParams.id);
    }
}

Controller.$inject = [
    '$scope',
    'ProductModel',
    '$stateParams'
];

productModule
    .controller('productDetailController', Controller);
