
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhReport
 * @description     Reportmodule
 */
var reportsModule = angular.module("app.reports", []);

'use strict';

/**
 * @name            OnhanhReports
 * @description     ReportsConfig
 */
reportsModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("reports", {
              title: "Reports",
              // Use a url of "/" to set a states as the "index".
              url: "/reports",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'reportsController',
              templateUrl: '/web/reports/reports.html',
            });



            
        }
    ]);

'use strict';

/**
 * @name            OnhanhReports
 * @description     ReportsController
 */
reportsModule
    .controller('reportsController', [ '$scope', 'reportsService',
        function($scope, reportsService) {

        }
    ]);

'use strict';

/**
 * @name            OnhanhReports
 * @description     ReportsServiceController
 */
reportsModule
    .service('reportsService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "reports"
          });
        }
    ]);


})(window, window.angular);
