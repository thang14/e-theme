'use strict';
/**
 * @name            Onhanh
 * @description     App
 */

window.angular.module('app', [
    
    //Core module
    'ui.router',
    
    //App module
    'app.environment',
    'app.kernel',
    'app.auth',
    'app.dashboard',
    
    // Templates
    'web'
]);
