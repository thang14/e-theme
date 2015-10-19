
'use strict';

/**
 * @name            OnhanhAuth
 * @description     Module config
 */
authModule.config(['$stateProvider', 
  function($stateProvider) {
    $stateProvider.state('userLogin', {
      url: "/user/login",
      templateUrl: '/web/auth/login.html',
      controller: 'AuthLoginController',
      data: {
        role: 'guest'
      }
    });
  }
]);
