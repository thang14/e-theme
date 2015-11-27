'use strict';

/**
 * @name            OnhanhProduct
 * @description     sectionModule
 */
sectionModule.factory('Sections', ['resourceService',
    function() {
    	var sectionResource = resourceService('section');
    	return sectionResource;
    }
]);
