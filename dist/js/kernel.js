
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
                return collectionService.getCollection(this.collectionName);
            },
            
            get: function(conditions, callback) {
                return this.getCollection().get(conditions, callback);
            },
            
            create: function($data, callback) {
                return this.getCollection().create($data, callback);
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
            load: function($scope, service, conditions) {
                return service
                .get(conditions, function(data) {
                    $scope.gridOptions.data = data.data;
                    $scope.gridOptions.totalItems = data.total;
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
angular.module('app.kernel')
.factory('resourceService', ['Environment', '$resource',
    function(Environment, $resource) {
        var resourceService = function(name) {
            var api = this.api =  Environment.settings.api + '/' + name + Environment.settings.prefix;
            this.resource = $resource(api+'/:id',{
                id:'@id'
            }, {
              charge: {
                  method:'POST', 
                  params:{
                      charge:true
                      
                  }}
            });
        };
        
        resourceService.prototype.create = function(data) {
            return new this.resource(data);
        }
        
        resourceService.prototype.get = function(params, callback) {
            return new this.resource.get(params, callback);
        }
        
        return resourceService;
    }
]);


})(window, window.angular);
