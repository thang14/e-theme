'use strict';

/**
 * @name            OnhanhProduct
 * @description     variantModule
 */
variantModule.factory('Variants', ['resourceService', 'Medias'
    function(resourceService) {
        var variantResource = resourceService('variant');
        return variantResource;
    }
]);
