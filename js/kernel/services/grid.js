
'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
    function() {
        return {
            load: function($scope, params, service) {
                return service
                .find(params)
                .success(function(data, status) {
                    $scope.gridOptions.data = data.data;
                    $scope.gridOptions.totalItems = data.total;
                }).error(function(err) {
                    console.log(121); return;
                });
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
