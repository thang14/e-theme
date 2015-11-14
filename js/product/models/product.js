'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule
.factory('productModel', ['baseModel', 'productService'
    function(baseModel, productService) {
        return baseModel.extend({
            
            /**
             * Service 
             */
            service: productService
        });
    }
]);
