'use strict';
/**
 * @name            Onhanh
 * @description     App
 */

window.angular.module('app', [
    'ngResource',
    //Core module
    'ui.router',
    
    //Angular Modules
    'angular-loading-bar',

    //App modules
    'app.environment',
    'app.kernel',
    //'app.auth',
    //'app.shop',
    //'app.media',
    'app.dashboard',
    'app.product',
    //'app.section',
    //'app.order',
    //'app.reports',
    //'app.settings'
]).run(['$rootScope', '$state', '$stateParams', 'initService',
    function ($rootScope,   $state,   $stateParams, initService) {

        initService.launch();

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);
