'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */


var ProductDetailController = function($scope, product) {
    $scope.resource = product.item;
}

Controller.$inject = [
    '$scope',
    'ProductModel',
    '$stateParams'
];

productModule
    .controller('productDetailController', ProductDetailController);
