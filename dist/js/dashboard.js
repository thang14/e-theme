
(function(window, angular, undefined) {
;'use strict';

/**
 * @name            OnhanhDashboard
 * @description     DashboardModule
 */
 
var dashboardModule = angular.module('app.dashboard', []);
;'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/:name/home",
                templateUrl: '/web/dashboard/dashboard',
                controller: 'DashboardController'
            });
    }]);

console.log(12121);;'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
dashboardModule
	.controller('DashboardController', ['$location', '$scope', '$routeParams', '$rootScope',
	    function($location, $scope, $routeParams, $rootScope) {}
	]);;
})(window, window.angular);
