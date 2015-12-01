'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderDetailController
 */
orderModule
.controller('orderDetailController', [ '$scope', 'order',
    function($scope, order) {
        $scope.resource = order;
    }
]);
