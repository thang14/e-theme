'use strict';

/**
 * @name            OnhanhOrder
 * @description     OrderServiceController
 */
orderModule
    .controller('orderServiceController', [ 'baseService'
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "order"
          });  
        }
    ]);
