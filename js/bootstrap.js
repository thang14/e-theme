'use strict';

/**
 * @name            Onhanh
 * @description     Application Bootstrap File
 */

define([
    'jquery',
    'app',
], function(jQuery) {
    'use strict';
    
    jQuery(document).ready(function() {
      angular.bootstrap(document, ['app']);
    });
});
