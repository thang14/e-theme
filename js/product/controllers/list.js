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
            cellTemplate: '/web/ui-grid/image-view.html',
          },{
            name: "name",
            enableCellEdit: true,
            enableColumnMenu: false,
            cellTemplate: '<div class="ngCellText"><a target="_blank" ng-click="viewDetail(row.entity.id)">{{col.field}}</a></div>'
          },{
            name: "price",
            enableColumnMenu: false,
            width: '100',
            enableCellEdit: true,
            editableCellTemplate: '/web/ui-grid/editor-price.html',
          },{
            name: "sale_price",
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '100',
            editableCellTemplate: '/web/ui-grid/editor-price.html',
          },{
            name: "onsite",
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
          
          $scope.newProduct = function(id) {
            $state.transitionTo('product.new');
          }
        }
    ]);
