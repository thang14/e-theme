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
      displayName: "ID",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"><a ui-sref="order.detail({id: row.entity.id})">{{COL_FIELD}}</a> </div>'
    },{
      name: "info",
      width: '200',
      displayName: "User info",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">'+
      		'<div><span class="text-semibold">Name</span>: {{row.entity.user.name}}</div>'+
      		'<div><span class="text-semibold">Email</span>: {{row.entity.user.email}}</div>'+
      		'<div><span class="text-semibold">Phone</span>: {{row.entity.user.phone}}</div>'+
      	'</div>'
    }, {
      name: "price",
      displayName: "Price",
      width: '180',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">'+
      		'<div><span class="text-semibold">Total</span>: {{COL_FIELD | currency:"đ ":0}}</div>'+
      		'<div><span class="text-semibold">Paid</span>: {{row.entity.paid | currency:"đ ":0}}</div>'+
      		'<div><span class="text-semibold">Must return</span>: {{ COL_FIELD - row.entity.paid  | currency:"đ ":0}}</div>'+
      	'</div>'
    }, {
      name: "note",
      displayName: "Note",
    },{
      name: "created_at",
      width: '150',
      displayName: "Created at",
    },{
      name: "status",
      width: '150',
      displayName: "Status",
    }],

    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 80,
        rowHeight: 80,
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
