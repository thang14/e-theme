'use strict';

/**
 * @name            OnhanhKernel
 * @description     collectionService
 */

kernelModule.service('collectionService', ['resourceService',

    function(resourceService) {
        return {
            collections: {},
            getCollection: function($name) {
                if(!this.collections[$name]) {
                    return this.collections[$name] = new resourceService($name);
                }
                return this.collections[$name];
            }
        }
    }
]);
