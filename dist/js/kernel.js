
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
var kernelModule = angular.module('app.kernel', []);


'use strict';

/**
 * @name            OnhanhKernel
 * @description     ...
 */
kernelModule.config(['$provide', '$urlRouterProvider',
        function($provide, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }
    ]);
'use strict';

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

        $scope.item = $scope.item || {};

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
            if ($scope.detail.id !== undefined) {
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
            if ($scope.detail.id === undefined) {
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


'use strict';

/**
 * @name            OnhanhProduct
 * @description     BaseService
 */
kernelModule.service('baseService', ['collectionService',
    function(collectionService) {
        return {

            collectionName: undefined,

            getCollection: function() {
                return collectionService
                .getCollection(this.collectionName);
            },

            find: function(params) {
                return this.getCollection()
                .find(params);
            },

            get: function($id) {
                this.getCollection()
                .get($id);
            },

            remove: function($id) {
                this.getCollection()
                .remove($id);
            },

            save: function($data) {
                this.getCollection()
                .save($data);
            },

            create: function($data) {
                this.getCollection()
                .create($data);
            }
        }
    }
]);

'use strict';

/**
 * @name            OnhanhKernel
 * @description     collectionService
 */

kernelModule.service('collectionService', ['resourceService',

    function(resourceService) {
        return {
            collections: {},
            getCollection: function($name) {
                if(!this.collections[$name]) {
                    return this.collections[$name] = new resourceService($name);
                }
                return this.collections[$name];
            }
        }
    }
]);


'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
    function() {
        return {
            load: function($scope, service) {
                return service
                .find()
                .success(function(data, status) {
                    $scope.gridOptions.data = data.data;
                    $scope.gridOptions.totalItems = data.total;
                }).error(function(err) {
                    console.log(121); return;
                });
            },

            gridOptions: function($scope) {
                return {
                    selectionRowHeaderWidth: 35,
                    rowHeight: $scope.rowHeight || 35,
                    showGridFooter: true,
                    enableFiltering: true,
                    enableSorting: false,
                    useExternalFiltering: true,
                    columnDefs: $scope.columns,
                    onRegisteApi: function(gridApi) {
                        //register save row
                        gridApi.rowEdit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                            $scope.onSaveRow(rowEntity);
                        });
                    }
                };

            },

            actionTemplate: function () {
                return '<ng-include src="\'/web/collection/action.html\'"></ng-include>';
            },

        }
    }
]);

'use strict';

/**
 * @name            OnhanhKernel
 * @description     Most important data are loaded here
 */

kernelModule
  .service('initService', ['$http', '$rootScope', 'Environment',
      function ($http, $rootScope, Environment) {
          return {
              launch: function () {
                  $rootScope.domain = Environment.settings.domain;
              }
          }
      }
  ]);

'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel').factory('resourceService', ['$http', 'Environment',
    function($http, Environment) {

        var resourceService = function(name) {
            this.resource = name;
            this.api = Environment.settings.api + '/' + name + Environment.settings.prefix;
        }

        resourceService.prototype = {

            find: function(params) {
                return $http.get(this.api, params);
            },

            remove: function($id) {
                return $http.delete(this.api+'/'+$id);
            },

            save: function(data) {
                var url = this.api+'/'+data.id;
                return $http({
                    method: 'PUT',
                    url: url,
                    data: data
                });
            },

            create: function(data) {
                var url = this.api;
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


})(window, window.angular);
