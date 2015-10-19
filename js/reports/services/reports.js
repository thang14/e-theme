'use strict';

/**
 * @name            OnhanhReports
 * @description     ReportsServiceController
 */
orderModule
    .service('reportsService', [ 'baseService'
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "reports"
          });  
        }
    ]);
