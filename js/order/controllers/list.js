'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderController
 */
orderModule
    .controller('orderController', [ '$scope', 'gridOptions',
        function($scope, gridOptions) {
            $scope.gridOptions = gridOptions;
        }
    ]);
