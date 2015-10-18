'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.service('productService', ['baseService'
    function(service, collectionService) {
        return angular.extend(baseService, {
            collectionName: "product"
        });
    }
]);
