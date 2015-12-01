'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderDetailController
 */
orderModule
.controller('orderDetailController', [ '$scope', 'order',
    function($scope, orderItem) {
        $scope.resource = order;
    }
]);
