'use strict';

/**
 * @name            OnhanhKernel
 * @description     AbstractDetailController
 */

angular.module('app.kernel')
.controller('abstractDetailController', ['$controller', '$scope', 'itemService', '$stateParams'
    function($controller, $scope, itemService, $stateParams) {
        
        $scope.detail = {
            id: $stateParams.id,
            name: $stateParams.name
        }
        
        $scope.item = {};
        
        /**
         * GET
         */
        if($scope.detail.id !== undefined) {
            itemService.get($scope.detail.id).success(
                function (data, status) {
                    $scope.item = data;
                }
            ).error(function (data, status) {
                    if (data.error.code == 404) {
                        $state.transitionTo('home');
                        notify('404 Noting found');
                    } else {
                        errorNotify(data);
                    }
                });
        }
    }
]);
