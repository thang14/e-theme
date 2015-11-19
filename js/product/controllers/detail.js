'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */


var ProductDetailController = function($scope, ProductModel, $stateParams) {
    
    $scope.resource = ProductModel.item;
    
    //Gets product detail
    if($stateParams.id != undefined) {
        ProductModel.get($stateParams.id);
    }
    
    $scope.deleteFile = function(index) {
        ProductModel.deleteFile(index);
    }
    
    $scope.upload = function($file) {
        ProductModel.upload($file);
    }
    
    $scope.selectMedia = function(index) {
        ProductModel.selectMedia(index);
    }
}

Controller.$inject = [
    '$scope',
    'ProductModel',
    '$stateParams'
];

productModule
    .controller('productDetailController', ProductDetailController);
