'use strict';

/**
 * @name            OnhanhKernel
 * @description     collectionService
 */

kernelModule.service('collectionService', [ '$scope'
    
    function($scope, service) {
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
