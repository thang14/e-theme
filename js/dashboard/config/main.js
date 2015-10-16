'use strict';

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
