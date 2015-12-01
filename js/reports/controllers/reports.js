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
