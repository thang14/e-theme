'use strict';

/**
 * @name            Onhanh
 * @description     Environment vars
 */

angular.module('app.environment', [])
    .service('Environment', function() {
        var api_domain = document.domain.replace("admin", "api");

        return {
            settings: {
                api: 'http://' + api_domain + '/'+this.currentShop()+'/examples/data',
                prefix: ".json",
                domain: 'http://' + api_domain,
                pageTitle: 'Onhanh - open source project | Admin'
            },
            
            currentShop: function() {
                return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
            }
        }
    });
