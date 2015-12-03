'use strict';

/**
 * @name            OnhanhKernel
 * @description     Most important data are loaded here
 */

kernelModule
  .service('initService', ['$http', '$rootScope', 'Environment',
      function ($http, $rootScope, Environment) {
          return {
              launch: function () {
                  $rootScope.domain = Environment.settings.domain;
                  $rootScope.locale = Environment.settings.locale;
                  $rootScope.currency = Environment.settings.currency;
              }
          }
      }
  ]);
