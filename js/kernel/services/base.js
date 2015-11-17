
'use strict';

/**
 * @name            OnhanhProduct
 * @description     BaseService
 */
kernelModule.service('baseService', ['collectionService',
    function(collectionService) {
        return {
            collectionName: undefined,
            getCollection: function() {
                return collectionService.getCollection(this.collectionName);
            }
        }
    }
]);
