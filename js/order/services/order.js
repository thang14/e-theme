'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
    .service('orderService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "order"
          });
        }
    ]);
