'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
    .service('dashboardService',["$http", "Environment"
        function($http, Environment) {
          return {
              getRole: function() {
                  var url = Environment.settings.api + '/role';
                  return $http.get(url);
              }
          }
        }
    ]);
