
(function(window, angular, undefined) {
;'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
var kernelModule = angular.module('app.kernel', []);

;;'use strict';

/**
 * @name            OnhanhKernel
 * @description     AbstractDetailController
 */

angular.module('app.kernel')
.controller('abstractDetailController', ['$controller', '$scope', 'itemService', '$stateParams', '$state', 'notify',
    function($controller, $scope, itemService, $stateParams, $state, notify) {

        $scope.detail = {
            id: $stateParams.id,
            name: $stateParams.name
        }

        $scope.item = {};

        var errorNotify = function (data) {
            // If basic message
            //if (angular.isUndefined(data.error.message) === false) {
            //    notify('Response:' + data.error.code + ' Message:' + data.error.message);
            //}

            if (angular.isUndefined(data.message) === false) {
                notify('Response:' + data.code + ' Message:' + data.message);
            }

            // If multiple errors
            if (angular.isUndefined(data.errors) === false) {
                angular.forEach(data.errors, function (errorMessage, key) {
                    notify(
                        'Response: ' + data.code + ' ' +
                        '"' + key + '": ' + errorMessage
                    );
                });
            }
        };

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
;;'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel').factory('resourceService', ['$http', 'Environment',
    function($http, Environment) {
        
        var resourceService = function(name) {
            this.resource = name;
        }
        
        resourceService.prototype = {
        
            getCollection: function($scope, pageNumber) {
                var url = Environment.settings.api + '/' + this.resource + '/?limit=' + $scope.pageLimit + '&current=' + pageNumber + '&filter=' + $scope.filter;
                return $http.get(url);
            }, 
            
            remove: function($id) {
                var url = Environment.settings.api+'/'+this.resource+'/'+$id;
                return $http.delete(url);
            },
            
            save: function(data) {
                var url = Environment.settings.api+'/'+this.resource+'/'+data.id;
                return $http({
                    method: 'PUT',
                    url: url,
                    data: data
                });
            },
            
            create: function(data) {
                var url = Environment.settings.api+'/'+this.resource;
                return $http({
                    method: 'POST',
                    url: url,
                    data: data
                });
            },
            
        }
        
        return resourceService;
    }
]);
;
})(window, window.angular);
