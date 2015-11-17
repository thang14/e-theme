'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
    .controller('productController', [ '$scope', 'productService', 'gridService', '$state',
        function($scope, productService, gridService, $state) {

            //Page Init
            $scope.currentPage = 1;
            $scope.maxSize = 5;

            $scope.setPage = function(page) {
                $scope.currentPage = page;
            }
            //Columns
          $scope.columns = [{
            name: "id",
            width: '75',
            enableColumnMenu: false,
          },{
            name: "photo",
            displayName: "Ảnh",
            width: '75',
            cellTemplate: '/web/ui-grid/image-view.html',
            enableColumnMenu: false,
          },{
            enableColumnMenu: false,
            name: "name",
            displayName: "Tên",
            enableCellEdit: true,
            cellTemplate: '<div class="ngCellText ui-grid-cell-contents">'+
                '<a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row)"><strong>{{MODEL_COL_FIELD}}</strong></a></div>'
          },{
            enableColumnMenu: false,
            name: "price",
            displayName: "Giá",
            width: '100',
            editableCellTemplate: '/web/ui-grid/editor-price.html',
            enableCellEdit: true,
            cellTemplate: '<div class="ngCellText ui-grid-cell-contents"><strong>{{MODEL_COL_FIELD | currency:"":0}} đ</strong></div>'
          },{
            enableColumnMenu: false,
            name: "sale",
            displayName: "Khuyến mãi",
            width: '80',
            enableCellEdit: true,
            cellTemplate: '<div class="ngCellText ui-grid-cell-contents"><strong>{{MODEL_COL_FIELD}} %</strong></div>'
          },{
            enableColumnMenu: false,
            displayName: "Số lượng",
            name: "quantity",
            enableCellEdit: true,
            width: '70',
            enableCellEdit: true,
          },{
            enableColumnMenu: false,
            displayName: "Trạng thái",
            name: "status",
            type: 'boolean',
            width: '50',

          },{
            enableColumnMenu: false,
            name: "action",
            displayName: "",
            width: '100',
            cellTemplate: '/web/collection/action.html',
          }];

          $scope.onSaveRow = function(rowEntity) {
            productService.update(rowEntity.id, rowEntity);
          }

          $scope.gridOptions = gridService.gridOptions($scope);

          //load collection from remote
          $scope.load = function() {
            console.log(1);
            gridService.load($scope, productService, {
                page: $scope.currentPage
            });
          }
          $scope.load();


          $scope.viewDetail = function(row) {
            $state.transitionTo('product.detail',{
              productId:row.entity.id
            })
          }

          $scope.newProduct = function(id) {
            $state.transitionTo('product.new');
          }
        }
    ]);
