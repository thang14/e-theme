'use strict';

/**
 * @name            OnhanhKernel
 * @description     AbstractDetailController
 */

angular.module('app.kernel')
.controller('abstractDetailController', ['$controller', '$scope', 'itemService', '$stateParams', '$state'
    function($controller, $scope, itemService, $stateParams, $state) {
        
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
            // New item
            if ($scope.details.id === undefined) {
                itemService.create($scope.item).success(
                    function (data, status) {
                        notify($scope.route.name + ' was added');
                        $state.transitionTo(
                            $scope.route.edit, {
                                id: data.id
                            }
                        );
                    }
                ).error(function (data, status) {
                        errorNotify(data);
                    });
            }

            if (callback) callback();
        }
        
        /**
         * SAVE & EXIT
         */
        $scope.editSaveAndExit = function () {
            itemService.save($scope.item).success(
                function (data, status) {
                    notify($scope.route.name + ' has been saved');
                    $state.transitionTo(
                        $scope.route.collection
                    );
                }
            ).error(function (data, status) {
                    errorNotify(data);
                });
        };
        
         /**
         * CANCEL
         */
        $scope.editCancel = function () {
            $state.transitionTo(
                $scope.route.collection
            );
        };
        
        /**
         * DELETE
         */
        $scope.editDelete = function () {
            itemService.remove($scope.detail.id).success(
                function (data, status) {
                    notify($scope.route.name + ' has been deleted');
                    $state.transitionTo(
                        $scope.route.collection
                    );
                }
            ).error(function (data, status) {
                    errorNotify(data);
                });
        };
    }
]);
