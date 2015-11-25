'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", function() {
  return {
    columns: [{
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
    
    gridOptions: function() {
      return {
        
      }
    }
  }
});
