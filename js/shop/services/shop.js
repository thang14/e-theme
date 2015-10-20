'use strict';

/**
 * @name            OnhanhShop
 * @description     ShopService
 */
shopModule
    .service('shopService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "infomation",
            getInfomation: function() {
                return this.get({});
            }
          });  
        }
    ]);
