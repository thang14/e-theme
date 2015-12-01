
(function(window, _, angular, undefined) {

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
              url: "/:id",

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
 * @description     OrderDetailController
 */
orderModule
.controller('orderDetailController', [ '$scope', 'order',
    function($scope, orderItem) {
        $scope.resource = order;
    }
]);

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


})(window, _, window.angular);
