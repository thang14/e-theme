'use strict';

/**
 * @name            OnhanhProduct
 * @description     variantModule
 */
variantModule.factory('variantResource', ['resourceService', 'Media'
    function(resourceService) {
        var variantResource = resourceService('variant');
        return variantResource;
    }
]);
