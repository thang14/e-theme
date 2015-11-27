
(function(window, angular, undefined) {

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


'use strict';

/**
 * @name            OnhanhAuth
 * @description     Module config
 */
 
authModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("user", {
              title: "User",
              // Use a url of "/" to set a states as the "index".
              url: "/user",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'authController',
              templateUrl: '/web/auth/detail.html',
            })
            
            .state("user.login", {
              title: "Login",
              // Use a url of "/" to set a states as the "index".
              url: "/login",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'authLoginController',
              templateUrl: '/web/auth/login.html',
            })


            
        }
    ]);



'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */

authModule.service('authService', ['$http', 'Environment',
  function($http, Environment) {
    return {

      logout: function() {
        var url = Environment.settings.domain + '/user/logout';
        return $http.get(url);
      },

      login: function(username, password) {
        var url = Environment.settings.domain + '/user/login';
        return $http.post(url, {
          username: username,
          password: password,
        });
      },

      getUserInfomation: function() {
        var url = Environment.settings.domain + '/user/infomation';
        return $http.get(url);
      }

    };
  }
]);


})(window, window.angular);
