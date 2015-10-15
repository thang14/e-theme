'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */

define(['app'], function(app) {
    app.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/:name/home",
                templateUrl: '/web/dashboard/dashboard',
                controller: 'DashboardController'
            });
    }]);
});
