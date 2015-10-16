
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopModule
 */
var shopModule = angular.module("app.shop", []);

'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopConfig
 */
shopModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("shop", {
              title: "Shop",
              // Use a url of "/" to set a states as the "index".
              url: "/shop",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'shopController',
              templateUrl: '/web/shop/shop.html',
            });



            
        }
    ]);

'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopController
 */
shopModule
    .controller('shopController', [ '$scope',
        function($scope) {
            
        }
    ]);



})(window, window.angular);
