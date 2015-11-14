'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */


var ProductModel = Class.extend({
    
});

    
	
	
	
productModule
.provider('productModel', Class.extend({

	instance: new NotesModel(),

	/**
	 * Initialize and configure ActivtyModel
	 * @return UserModel
 	*/ 
	$get:['$location','$route','NotesService',function(productService){
		this.instance._service = productService;
		return this.instance;
	}]
}));
