
'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
  function() {
    var gridService = function() {
      
      return {
        load: function($scope, service) {
          service.find().success(
            function(data, status) {
              $scope.gridOptions.data = data.data;
              $scope.gridOptions.totalItems = data.total;
            }
          );
          
        },
        
        gridOptions: function($scope) {
          return {
            selectionRowHeaderWidth: 35,
            rowHeight: $scope.rowHeight || 35,
            showGridFooter: true,
            enableFiltering: true,
            enableSorting: false,
            useExternalFiltering: true,
            columnDefs: $scope.columns,
          };
          
        }
        
      }
    }
    return gridService;
  }
]);
