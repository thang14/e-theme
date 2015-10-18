'use strict';

/**
 * @name            OnhanhKernel
 * @description     collectionService
 */

kernelModule.service('collectionService', [ '$scope', 'resourceService'
    
    function($scope, resourceService) {
        return {
            collections: {};
            getCollection: function($name) {
                if(!this.collections[$name]) {
                    return this.collections[$name] = new resourceService($name);
                }
                return this.collections[$name];
            }
        }
    }
]);
