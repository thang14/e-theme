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
                        console.log(data);
                        notify('404 Noting found');
                    } else {
                        errorNotify(data);
                    }
                });
        }
        
        /**
         * SAVE
         */
        $scope.editSave = function (callback) {
            // Existent item
            if ($scope.details.id !== undefined) {
                itemService.save($scope.item).success(
                    function (data, status) {
                        notify($scope.route.name + ' has been saved');
                        console.log(data);
                    }
                ).error(function (data, status) {
                        errorNotify(data);
                    });
            }
        }
        
    }
]);
