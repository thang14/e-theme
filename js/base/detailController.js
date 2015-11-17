'use strict';

/**
 * @name            OnhanhBase
 * @description     BaseDetailController
 */
 
var Controller = function($scope, $state, $stateParam, service) {
    $scope.detail = {
        id: $stateParam.id,
        name: $stateParam.name
    }
}

baseModule.controller('baseDetailController', Controller);
