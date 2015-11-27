'use strict';

/**
 * @name            Onhanh
 * @description     Environment vars
 */

window.angular.module('app.environment', [])
    .service('Environment', function() {
        
        function getNamespace() {
            return 'data';
            return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
        }
        
        return {
            settings: {
                namespace: getNamespace(),
                api: 'https://raw.githubusercontent.com/onhanh/admin-theme/master/examples/' + getNamespace(),
                prefix: ".json",
                domain: 'http://',
                pageTitle: 'Onhanh - open source project | Admin Dasboard'
            },
        }
    });
