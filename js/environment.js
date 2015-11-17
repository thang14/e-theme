'use strict';

/**
 * @name            Onhanh
 * @description     Environment vars
 */

window.angular.module('app.environment', [])
    .service('Environment', function() {
        var api_domain = document.domain.replace("admin", "api");
        
        function getNamespace() {
            return 'admin-theme/examples/data';
            return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
        }
        
        return {
            settings: {
                namespace: getNamespace(),
                api: 'http://' + api_domain + '/'+getNamespace(),
                prefix: ".json",
                domain: 'http://' + api_domain,
                pageTitle: 'Onhanh - open source project | Admin Dasboard'
            },
        }
    });
