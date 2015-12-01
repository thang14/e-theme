'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderController
 */
orderModule
    .controller('orderController', [ '$scope', 'orderGrid',
        function($scope, orderGrid) {
            $scope.gridOptions = orderGrid.gridOptions($scope);


            $scope.load = function() {
            	$scope.gridOptions.load();
            }

            $scope.load();
        }
    ]);
