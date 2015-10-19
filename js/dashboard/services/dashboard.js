'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
    .service('dashboardService',['baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "dashboard"
          });
        }
    ]);
