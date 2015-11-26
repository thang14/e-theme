'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopModule
 */
var shopModule = angular.module("app.shop", [])
.run(['$http', '$state', '$rootScope', 'Shop', 'Environment',
  function($http, $state, $rootScope, Shop, Environment) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if ($rootScope.shop === undefined) {
        $rootScope.shop = Shop.get({slug: Environment.settings.namespace}, function() {
          if(!$rootScope.shop) {
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
