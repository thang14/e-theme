'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantService
 */
variantModule.service('variantService', ['baseService'
    function(service, collectionService) {
        return angular.extend(baseService, {
            collectionName: "variant"
        });
    }
]);
