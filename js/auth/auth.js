'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */
 
var authModule = angular.module('app.auth', [])
.run(['$http', '$state', '$rootScope', 'authService', 'Environment',
  function($http, $state, $rootScope, authService, Environment) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if ($rootScope.user === undefined) {
        authService
        .getUserInfomation()
        .success(function(data, status) {
          if(data.username) {
            $rootScope.user = data;
          } else {
            $rootScope.user = false;
            event.preventDefault();
            $state.transitionTo('userLogin');
          }
        });
      } else if($rootScope.user == false) {
        event.preventDefault();
        $state.transitionTo('userLogin');
      }
    })
 
  }
]);
