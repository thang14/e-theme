'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderDetailController
 */
orderModule
.controller('orderDetailController', [ '$scope', 'orderItem',
    function($scope, orderItem) {
        this.resource = orderItem;
    }
]);
