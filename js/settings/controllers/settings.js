'use strict';

/**
 * @name            OnhanhSettings
 * @description     SettingsController
 */
settingsModule
.controller('settingsController', [ '$scope', '$state',
    function($scope, $state) {

        $state.transitionTo('settings.page');
    }
]);
