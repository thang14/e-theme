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
        var domain = 'https://raw.githubusercontent.com/onhanh/admin-theme/master/examples/';
        return {
            settings: {
                namespace: getNamespace(),
                api: domain + getNamespace(),
                prefix: ".json",
                domain: domain,
                pageTitle: 'Onhanh - open source project | Admin Dasboard',
                locale: "vi",
                currency: "$"
            },
        }
    });
