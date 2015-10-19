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
            width: '75',
          },{
            name: "photo",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            width: '75',
            cellTemplate: '<img ng-src="row.entity.photos"/>'
          },{
            name: "name",
            enableCellEdit: true,
            enableColumnMenu: false,
            cellTemplate: '<a ng-click="viewDetail(row.entity.id)" href="javascript:void(0)">{{row.entity.name}}</a>',
          },{
            name: "price",
            enableColumnMenu: false,
            width: '100',
            enableCellEdit: true,
            editableCellTemplate: '<input ui-number-mask="0" type="text" ng-model="row.entity.price"/>',
          },{
            name: "sale_price",
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '100',
            editableCellTemplate: '<input ui-number-mask="0" type="text" ng-model="row.entity.sale_price"/>',
          },{
            name: "status",
            type: 'boolean',
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '50',
            
          }];  
          
          $scope.onSaveRow = function(rowEntity) {
            productService.save(rowEntity);  
          }
          
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
