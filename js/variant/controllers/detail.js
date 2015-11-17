'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantDetailController
 */
var VariantAttributes = {
     price: 0,
     sale: 0,
     quantity: 0,
     options: []
}
var Controller = function(variantService, $controller){
    
    $scope.itemDefault = VariantAttributes;
    
    //Extend
    angular.extend($controller('baseDetailController', {
        service: variantService,
        $scope: $scope
    }), this);
}

Controller.$inject = [
    'variantService',
    '$controller',
];

variantModule.controller('variantDetailController', Controller);
