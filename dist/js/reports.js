
(function(window, _, angular, undefined) {

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
.controller('reportsController', [ '$scope',
    function($scope) {
    	// Views
    	(function($scope) {

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


})(window, _, window.angular);
