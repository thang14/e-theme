
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
            },

            load: function(params) {
                return this.getCollection().getCollection(params);
            },

            get: function($id) {
                return this.getCollection().get($id);
            },
        }
    }
]);
