'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderController
 */
orderModule
    .controller('orderController', [ '$scope', 'orderService'
        function($scope, orderService) {
            $scope.columns = [{
                name: "id",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '75',
            },{
                name: "email",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '200',
            },{
                name: "price",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '200',
            },{
                name: "status",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '80',
            }];
        }
    ]);
