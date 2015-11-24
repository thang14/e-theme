
'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
kernelModule.service('gridService', [
    function() {
        
        var defaults = this.defaults  = {
            data: [],
            totalItems: 0,
            showGridFooter: false,
            enableFiltering: false,
            enableSorting: true,
            //Enables cell editing.
            enableCellEdit: false,
            enableHorizontalScrollbar : 0,
            enableVerticalScrollbar   : 0,
            columnDefs: columns
            
        }
        
        return {
            gridOptions: function(options) {
                angular.extend(angular.copy(defaults), options);
            },

            actionTemplate: function () {
                return '<ng-include src="\'/web/collection/action.html\'"></ng-include>';
            },

        }
    }
]);
