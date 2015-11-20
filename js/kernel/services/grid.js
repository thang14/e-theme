
'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
    function() {
        return {
            gridOptions: function($scope, model) {
                return {
                    data: model.items,
                    totalItems: model.total,
                    showGridFooter: false,
                    enableFiltering: false,
                    enableSorting: true,
                    //Enables cell editing.
                    enableCellEdit: false,
                    enableHorizontalScrollbar : 0,
                    enableVerticalScrollbar   : 0,
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
