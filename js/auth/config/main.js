
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

