'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */


var ProductModel = Class.extend({
    
});


productModule
.provider('productModel', Class.extend({
	
	instance: new ProductModel(),
	
	$get: ['productService', function(productService) {
		this.instance._service = productService;
		return this.instance;
	}]
	
}));
