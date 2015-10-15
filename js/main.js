'use strict';

/**
 * @name            Onhanh
 * @description     Require.js launcher
 */

require.config({
    // Load paths from global variable
    paths: {
        'jquery': '../bower_components/jquery/jquery.min',
        'angular': '../bower_components/angular/angular',
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            'exports': 'angular',
            deps: ['jquery']
        },
        'jquery': {
            'exports': 'jquery'
        }
    },
    // Kick start application
    deps: [
        './environment',
        './onhanh/kernel/kernel',
        './onhanh/product/product',
        './onhanh/avariant/avariant',
        './onhanh/reports/reports',
        './onhanh/order/order',
        './onhanh/section/section',
        './onhanh/shop/shop',
        './onhanh/auth/auth',
        './onhanh/settings/settings',
        'bootstrap',
    ],
    priority: [
        "angular"
    ]
});
