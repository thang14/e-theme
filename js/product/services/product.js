'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.service('productService', ['baseService', 'collectionService'
    function(service, collectionService) {
        return agular.extend(baseService, {
            collectionName: "product"
        });
    }
]);
