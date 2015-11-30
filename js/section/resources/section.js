'use strict';

/**
 * @name            OnhanhProduct
 * @description     sectionModule
 */
sectionModule.factory('Sections', ['resourceService',
    function(resourceService) {
    	var sectionResource = resourceService('section');
    	return sectionResource;
    }
]);
