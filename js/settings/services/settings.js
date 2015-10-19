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
