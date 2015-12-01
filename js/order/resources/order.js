'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
    .service('Orders', [ 'resourceService',
        function(resourceService) {
          return resourceService('order');
        }
    ]);
