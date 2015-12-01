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