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
            '<a ui-sref="product.detail({id: row.entity.id})"><i class="fa fa-pencil-square-o"></i></a>',
        '</div>'
      ].join('')
    },{
      name: "id",
      width: '150',
      displayName: "ID",
    },{
      name: "user.email",
      width: '200',
      displayName: "Email",
    },{
      name: "user.name",
      width: '200',
      displayName: "Username",
    },{
      name: "user.phone",
      width: '200',
      displayName: "Phone",
    },{
      name: "price",
      width: '200',
      displayName: "Price",
    },{
      name: "product.count",
      width: '150',
      displayName: "Product Count",
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
        enableHorizontalScrollbar: 0, 
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
