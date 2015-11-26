'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */
 
var authModule = angular.module('app.auth', [])
.run(['$http', '$state', '$rootScope', 'Auth', 'Environment',
  function($http, $state, $rootScope, Auth, Environment) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if ($rootScope.user === undefined) {
        $rootScope.auth = Auth.get({}, function() {
          if(!$rootScope.auth) {
            $rootScope.auth = false;
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
