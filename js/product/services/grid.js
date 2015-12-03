'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", ['grid', 'Products', function(grid, Products) {

  return new grid(Products, {
    columnDefs: [{
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
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:$rootScope.currency:0}} </div>'
    }, {
      name: "sale",
      displayName: "Sale",
      width: '150',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{row.entity.getPriceSale() | currency:$rootScope.currency:0}} ({{COL_FIELD}}%)</div>'
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
    }]
  });
}]);
