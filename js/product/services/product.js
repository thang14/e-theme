'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.service('productService', ['baseService',
    function(baseService) {
        return angular.extend(baseService, {
            collectionName: "product"
        });
    }
]);
