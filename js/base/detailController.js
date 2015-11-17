'use strict';

/**
 * @name            OnhanhBase
 * @description     BaseDetailController
 */
 
 var VariantDefault = {
     price: 0,
     sale: 0,
     quantity: 0,
     options: []
 }
 
var Controller = function($scope, $state, $stateParam, service) {
    $scope.detail = {
        id: $stateParam.id,
        name: $stateParam.name
    }
    
    
    if($scope.detail.id) {
        $scope.item = service.get($scope.detail.id);
    } else {
        $scope.item = angular.copy(VariantDefault);
    }
}

baseModule.controller('baseDetailController', Controller);
