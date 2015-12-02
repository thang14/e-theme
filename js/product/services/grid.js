'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", ['Products', function(Products) {
  return {
    columns: [{
      name: "name",
      displayName: "Name",
      cellTemplate:'<div class="ui-grid-cell-contents text-semibold" title="TOOLTIP">{{COL_FIELD}}</div>'
    },{
      name: "branh",
      displayName: "Branh",
      width: '120',
    }, {
      name: "price",
      displayName: "Price",
      width: '120',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ ":0}} </div>'
    }, {
      name: "sale",
      displayName: "Sale",
      width: '150',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{row.entity.getPriceSale() | currency:"đ ":0}} ({{COL_FIELD}}%)</div>'
    }, {
      name: "quantity",
      displayName: "Quantity",
      width: '80',
    },{
      name: "edit",
      width: '23',
      displayName: "",
      enableCellEdit: false,
      enableSorting: false,
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a ui-sref="product.detail({id: row.entity.id})"><i class="fa fa-pencil-square-o"></i></a>',
        '</div>'
      ].join('')
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
        enableColumnMenus: false,
        enableScrollbars: false,
        enableHorizontalScrollbar: 0, 
        enableVerticalScrollbar: 0,
        load: function(params, fn) {
          var res = Products.get(params, function() {
            this.data = [];
            angular.forEach(res.data, function(data) {
              this.data.push(new Products(data));
            }, this);
            this.totalItems = res.total;
            this.minRowsToShow = this.data.length;
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
