'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsService
 */
settingsModule
    .controller('settingsService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "settings"
          });  
        }
    ]);
