
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderModule
 */
var orderModule = angular.module("app.order", []);

'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderConfig
 */
orderModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("order", {
              title: "Order",
              // Use a url of "/" to set a states as the "index".
              url: "/order",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'orderController',
              templateUrl: '/web/order/list.html',
            })
            
            .state("order.detail", {
              title: "Order Detail",
              // Use a url of "/" to set a states as the "index".
              url: "/:orderId",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'orderDetailController',
              templateUrl: '/web/order/detail.html',
            });



            
        }
    ]);

'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderAddController
 */
orderModule
    .controller('orderAddController', [ '$scope', 'orderService',
        function($scope, orderService) {

        }
    ]);

'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderDetailController
 */
orderModule
    .controller('orderDetailController', [ '$scope', 'orderService',
        function($scope, orderService) {

        }
    ]);

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

'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
    .service('orderService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "order"
          });
        }
    ]);


})(window, window.angular);
