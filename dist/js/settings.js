
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsModule
 */
var settingsModule = angular.module("app.settings", []);


'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderConfig
 */
settingsModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("settings", {
              title: "Settings",
              url: "/settings",
              controller: 'settingsController',
              templateUrl: '/web/settings/settings.html',
            })
            .state("settings.page", {
              title: "Setting Page",
              url: "/page",

              views: {
                'setting' : {
                  controller: 'settingPageController',
                  templateUrl: '/web/settings/page.html',
                }
              }
              
            })
            .state("settings.manager", {
              title: "Setting manager",
              url: "/managers",
              views: {
                'setting' : {
                  controller: 'settingManagerController',
                  templateUrl: '/web/settings/manager.html',
                }
              }
              
            })
            .state("settings.payment", {
              title: "Setting Payment",
              url: "/payment",
              views: {
                'setting' : {
                  controller: 'settingPaymentController',
                  templateUrl: '/web/settings/payment.html',
                }
              }
              
            })
            .state("settings.shipping", {
              title: "Setting shipping",
              url: "/shipping",
              views: {
                'setting' : {
                  controller: 'settingShippingController',
                  templateUrl: '/web/settings/shipping.html',
                }
              }
              
            })
            .state("settings.social", {
              title: "Setting social",
              url: "/social",
              views: {
                'setting' : {
                  controller: 'settingSocialController',
                  templateUrl: '/web/settings/social.html',
                }
              }
              
            })
            .state("settings.notifications", {
              title: "Setting notifications",
              url: "/notifications",
              views: {
                'setting' : {
                  controller: 'settingNotificationsController',
                  templateUrl: '/web/settings/notifications.html',
                }
              }
              
            });      
        }
    ]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     settingInfoController
 */
settingsModule.controller('settingInfoController', [ '$scope',
    function($scope) {
        
    }
]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     settingsModule
 */
settingsModule
.controller('settingManagerController', [ '$scope',
    function($scope) {
        
    }
]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     settingsModule
 */
settingsModule
.controller('settingNotificationController', [ '$scope',
    function($scope) {
        
    }
]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     settingsModule
 */
settingsModule
.controller('settingPageController', [ '$scope',
    function($scope) {
        
    }
]);


'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsController
 */
settingsModule
.controller('settingPaymentsController', [ '$scope',
    function($scope) {
        
    }
]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsController
 */
settingsModule
.controller('settingsController', [ '$scope',
    function($scope) {
        
    }
]);

'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsService
 */
settingsModule
    .service('settingsService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "settings"
          });  
        }
    ]);


})(window, _, window.angular);
