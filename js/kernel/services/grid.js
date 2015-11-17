
'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
    function() {
        return {
            load: function($scope, service, conditions) {
                return service
                .get(conditions, function(data) {
                    $scope.gridOptions.data = data.data;
                    $scope.gridOptions.totalItems = data.total;
                });
            },

            gridOptions: function($scope) {
                return {
                    selectionRowHeaderWidth: 35,
                    rowHeight: $scope.rowHeight || 35,
                    showGridFooter: true,
                    enableFiltering: false,
                    enableSorting: false,
                    useExternalFiltering: true,
                    enableHorizontalScrollbar: false, 
                    enableVerticalScrollbar: false,
                    columnDefs: $scope.columns,
                    minRowsToShow: $scope.gridOptions.data.length;
                    onRegisteApi: function(gridApi) {
                        //register save row
                        gridApi.rowEdit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                            $scope.onSaveRow(rowEntity);
                        });
                    }
                };

            },

            actionTemplate: function () {
                return '<ng-include src="\'/web/collection/action.html\'"></ng-include>';
            },

        }
    }
]);
