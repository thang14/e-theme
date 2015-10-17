
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhDashboard
 * @description     DashboardModule
 */
 
var dashboardModule = angular.module('app.dashboard', []);

'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            //////////
            // Home //
            //////////

            .state("home", {
              title: "Dashboard",
              // Use a url of "/" to set a states as the "index".
              url: "/",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'dashboardController',
              templateUrl: '/web/dashboard/dashboard.html'
            });
        }
    ]);

'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
	.controller('dashboardController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
	    	
	    }
	]);

})(window, window.angular);
