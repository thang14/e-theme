
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
            
            get: function(conditions, callback) {
                return this.getCollection().get(conditions, callback);
            },
            
            create: function($data, callback) {
                return this.getCollection().create($data, callback);
            }
        }
    }
]);
