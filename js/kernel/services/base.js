
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
                return collectionService
                .getCollection(this.collectionName);
            },

            find: function(params) {
                return this.getCollection()
                .find(params);
            },

            get: function($id) {
                return this.getCollection()
                .get($id);
            },

            remove: function($id) {
                return this.getCollection()
                .remove($id);
            },

            save: function($data) {
                return this.getCollection()
                .save($data);
            },

            create: function($data) {
                return this.getCollection()
                .create($data);
            }
        }
    }
]);
