
(function(window, _, angular, undefined) {

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
    	

    	// Views
    	(function() {

    		var Views = {}
    		Views.labels = [];
	    	for(var i = 0; i < 12; i++) {
	    		Views.labels.push(i+':00');
	    	}
		 	
		    Views.series = ['Views'];
			Views.data = [[]];

			for(var i = 0; i < 12; i++) {
	    		Views.data[0].push(i);
	    	}
			Views.onClick = function (points, evt) {
			    console.log(points, evt);
			};

			$scope.views = Views;
    	})($scope);
    }
]);
'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
    .service('dashboardService',["$http", "Environment",
        function($http, Environment) {
          return {
              getRole: function() {
                  var url = Environment.settings.api + '/role';
                  return $http.get(url);
              }
          }
        }
    ]);


})(window, _, window.angular);
