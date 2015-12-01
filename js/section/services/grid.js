'use strict';

/**
 * @name            OnhanhSection
 * @description     sectionModule
 */
sectionModule
.service("sectionGrid", ['Sections', function(Sections) {
  return {
    columns: [{
      name: "action",
      width: '23',
      displayName: "",
      enableCellEdit: false,
      enableSorting: false,
      cellTemplate: [
        '<div class="ngCellText ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row.entity)"><i class="fa fa-pencil-square-o"></i></a>',
        '</div>'
      ].join('')
    },{
      name: "name",
      displayName: "Name",
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
          var res = Sections.query(function() {
            this.data= res;
            this.totalItems = res.length;
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
