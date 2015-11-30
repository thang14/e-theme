'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", ['Products', function(Products) {
  return {
    columns: [{
      name: "action",
      width: '100',
      displayName: "",
      enableCellEdit: false,
      enableSorting: false,
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a href="#"><i class="fa-pencil-square-o"></i> {{Constants.EDIT}}</a>',
        '</div>'
      ].join('')
    },{
      name: "name",
      displayName: "Tên",
    }, {
      name: "price",
      displayName: "Giá tiền",
      width: '120',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ "}} </div>'
    }, {
      name: "sale",
      displayName: "Khuyến mãi",
      width: '80',
    }, {
      name: "quantity",
      displayName: "Số lượng",
      width: '80',
    }],
    
    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: true,
        exporterMenuCsv: false,
        enableGridMenu: false,
        useExternalFiltering: false,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = Products.get(params, function() {
            this.data= res.data;
            this.totalItems = res.total;
            fn ? fn : "";
          }.bind(this));
        },
        
        onRegisterApi: function(gridApi) {
          this.api = gridApi;
          
          if($scope.saveRow) {
            gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
          }
        }
      }
      return angular.extend(defaults, options);
    }
  }
}]);
