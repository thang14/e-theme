'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */

define(['app'], function(app) {
    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: '/layout/dashboard',
                controller: 'DashboardController'
            });
    }]);
});
