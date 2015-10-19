'use strict';

/**
 * @name            OnhanhReports
 * @description     ReportsServiceController
 */
reportsModule
    .service('reportsService', [ 'baseService'
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "reports"
          });  
        }
    ]);
