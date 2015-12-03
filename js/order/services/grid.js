'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
.service("orderGrid", ['Orders', function(Orders) {
  return {
    columns: [{
      name: "action",
      width: '23',
      displayName: "",
      enableSorting: false,
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a ui-sref="order.detail({id: row.entity.id})"><i class="fa fa-pencil-square-o"></i></a>',
        '</div>'
      ].join('')
    },{
      name: "id",
      width: '150',
      displayName: "Order ID",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"><a ui-sref="order.detail({id: row.entity.id})">{{COL_FIELD}}</a> </div>'
    },,{
      name: "created_at",
      displayName: "Date",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"><span date-interval="{{COL_FIELD}}"></span></div>'
    },{
      name: "payment_status",
      displayName: "Payment status",
    },{
      name: "fulfillment_status",
      displayName: "Fulfillment status",
    },{
      name: "price",
      displayName: "Total",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ ":0}}</div>'
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
        enableCellEdit: false,
        enableColumnMenus: false,
        enableScrollbars: false,
        enableHorizontalScrollbar: 1, 
        enableVerticalScrollbar: 0,
        load: function(params, fn) {
          var res = Orders.get(params, function() {
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
