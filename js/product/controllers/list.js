'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
    .controller('productController', [ '$scope','productService', 'gridService'
        function($scope, productService, gridService) {
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
            enableColumnMenu: false,
          },{
            name: "price",
            enableColumnMenu: false,
            width: '100',
          },{
            name: "sale_price",
            enableColumnMenu: false,
            width: '100',
          },{
            name: "action",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            width: '75',
            cellTemplate: gridService.gridOptions()
          }];  
        }
    ]);
