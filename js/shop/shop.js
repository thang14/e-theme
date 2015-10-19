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
