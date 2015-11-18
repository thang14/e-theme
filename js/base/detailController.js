'use strict';

/**
 * @name            OnhanhBase
 * @description     BaseDetailController
 */
 

 
var Controller = function($scope, $state, $stateParams, service) {
    
    $scope.detail = {
        id: $stateParam.id,
        name: $stateParam.name
    }
    
    // Load Detail 
    if($scope.detail.id != undefined) {
        $scope.item = service.get($scope.detail.id);
    } else {
        $scope.item = angular.copy($scope.itemDefault);
    }
    
    //Save
    $scope.save = function(callback) {
        if($scope.item.id == undefined) {
            $scope.item = service.create($scope.item, callback);
        } else {
            $scope.item.$save(callback);
        }
        
    }
    
    //Save and finish
    $scope.saveAndFinish = function() {
        $scope.save(function() {
            $state.transitionTo($scope.route.name);
        });
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


Controller.$inject = [
    '$scope',
    '$state',
    '$stateParams',
    'service'
];

baseModule.controller('baseDetailController', Controller);
