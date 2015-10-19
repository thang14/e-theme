'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
    .controller('productController', [ '$scope','productService', 'gridService', '$state'
        function($scope, productService, gridService, $state) {
          $scope.columns = [{
            name: "id",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            cellEditableCondition: false,
            width: '75',
          },{
            name: "photo",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            width: '75',
            cellEditableCondition: false,
            cellTemplate: '<img ng-src="row.entity.photos"/>'
          },{
            name: "name",
            enableColumnMenu: false,
            cellTemplate: '<a ng-click="viewDetail(row.entity.id)" href="javascript:void(0)">{{row.entity.name}}</a>'
          },{
            name: "price",
            enableColumnMenu: false,
            width: '100',
          },{
            name: "sale_price",
            enableColumnMenu: false,
            width: '100',
          }];  
          
          $scope.gridOptions = gridService.gridOptions();
          //load collection from remote
          $scope.load = function() {
            gridService.load($scope, productService);
          }
          $scope.load();
          
          $scope.viewDetail = function(id) {
            $state.transitionTo('product.detail',{
              id:id
            })
          }
        }
    ]);
