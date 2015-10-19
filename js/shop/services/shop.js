'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopService
 */
shopModule
    .service('settingsService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "shop"
          });  
        }
    ]);
