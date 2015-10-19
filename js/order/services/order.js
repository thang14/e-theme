'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
    .controller('orderService', [ 'baseService'
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "order"
          });  
        }
    ]);
