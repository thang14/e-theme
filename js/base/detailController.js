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
    
    // Load Detail 
    if($scope.detail.id) {
        $scope.item = service.get($scope.detail.id);
    } else {
        $scope.item = angular.copy(VariantDefault);
    }
    
    //Save
    $scope.save = function() {
        if(!$scope.detail.id) {
            $scope.item = service.create($scope.item);
        }
        $scope.item.$save();
    }
    
    //Save and finish
    $scope.saveAndFinish = function() {
        $scope.save();
        $state.transitionTo($scope.route.name);
    }
    
    //Cancel
    $scope.cancel = function() {
        $state.transitionTo($scope.route.name);
    }
    
    //Clone
    $scope.newItem = function() {
        $state.transitionTo($scope.route.name+'.new');
    }
    
    //Clone
    $scope.clone = function() {
        
    }
    
    //Clone
    $scope.remove = function() {
        $scope.item.$remove();
        $state.transitionTo($scope.route.name);
    }
    
}

baseModule.controller('baseDetailController', Controller);
