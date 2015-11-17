
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopModule
 */
var shopModule = angular.module("app.shop", [])
.run(['$http', '$state', '$rootScope', 'shopService', 'Environment',
  function($http, $state, $rootScope, shopService, Environment) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if ($rootScope.shop === undefined) {
        shopService
        .getInfomation()
        .success(function(data, status) {
          if(data.name) {
            $rootScope.shop = data;
          } else {
            $rootScope.shop = false;
            event.preventDefault();
            $state.transitionTo('404');
          }
        });
      } else if($rootScope.shop == false) {
        event.preventDefault();
        $state.transitionTo('404');
      }
    })
 
  }
]);

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

            .state("info", {
              title: "Shop Info",
              // Use a url of "/" to set a states as the "index".
              url: "/info",

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

'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopService
 */
shopModule
    .service('shopService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "infomation",
            getInfomation: function() {
                return this.get({});
            }
          });  
        }
    ]);


})(window, window.angular);
