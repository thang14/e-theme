
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
                this.getCollection()
                .get($id);
            },

            remove: function($id) {
                this.getCollection()
                .remove($id);
            },

            save: function($data) {
                this.getCollection()
                .save($data);
            },

            create: function($data) {
                this.getCollection()
                .create($data);
            }
        }
    }
]);
