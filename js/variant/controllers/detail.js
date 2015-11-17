'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantDetailController
 */
 
var Controller = function(variantService, $controller){
    
    //Extend
    angular.extend(this, $controller('baseDetailController', {
        service: variantService,
        $scope: $scope
    }))
}

variantModule.controller('variantDetailController', Controller);
