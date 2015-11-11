'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderController
 */
orderModule
    .controller('orderController', [ '$scope', 'orderService',
        function($scope, orderService) {
            $scope.columns = [{
                name: "id",
                displayName: "Order code",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '75',
            },{
                name:"fullname",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '200',
            },{
                name:"phone",
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
                name: "payments",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '200',
            },{
                name: "created_at",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '80',
            },{
                name: "status",
                enableColumnMenu: false,
                enableSorting: false,
                enableFiltering: false,
                width: '80',
            }];
        }
    ]);
