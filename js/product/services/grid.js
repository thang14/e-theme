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
      displayName: "",
      cellTemplate: "/web/grid/action/html",
    },{
      name: "name",
      displayName: "Tên",
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"> '+
          '<a href="#" ng-click="grid.appScope.viewDetail(row.entity.id)">{{COL_FIELD}}'+
          '</a></div>'
    }, {
      name: "price",
      displayName: "Giá tiền",
    }, {
      name: "sale",
      displayName: "Khuyến mãi",
    }, {
      name: "quantity",
      displayName: "Số lượng",
    }],
    
    gridOptions: function(options) {
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: false,
        useExternalFiltering: true,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = resource.query(params, function() {
            this.data= res.items;
            this.totalItems = res.total;
            fn ? fn : "";
          }.bind(this));
        }
      }
      return angular.extend(defaults, options);
    }
  }
}]);
