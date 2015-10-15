'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
angular
.module('app.dashboard')
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state("home", {
            url: "/:name/home",
            templateUrl: '/web/dashboard/dashboard',
            controller: 'DashboardController'
        });
}]);
