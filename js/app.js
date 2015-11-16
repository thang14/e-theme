'use strict';
/**
 * @name            Onhanh
 * @description     App
 */

window.angular.module('app', [

    //Core module
    'ui.router',
    'ui.utils.masks',
    
    //Bootstrap
    'ui.bootstrap'

    //UI.grid
    'ui.grid',
    'ui.grid.edit',
    'ngFileUpload',
    'ngTagsInput',
    'angular-loading-bar',
    'cgNotify',

    //App modules
    //'app.locale',
    'app.environment',
    'app.kernel',
    //'app.auth',
    //'app.shop',
    'app.media',
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
