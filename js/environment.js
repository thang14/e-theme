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
                api: 'http://' + api_domain + '/admin-theme/examples/data',
                domain: 'http://' + api_domain,
                pageTitle: 'Onhanh - open source project | Admin',
                locale: {
                    "primary": 'en',
                    "available": ['ru', 'es', 'en']
                }
            },
            currentLocale: function() {
                var locale = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
                if (this.settings.locale.available.indexOf(locale) == -1) {
                    locale = this.settings.locale.primary;
                }
                return locale;
            }
        }
    });
