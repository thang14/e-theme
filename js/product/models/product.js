'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
 
/**
* Product model, provider since all products
* in the application use the same model
*/
var ProductProvider = function() {
 
 instance: new BaseModel(),
 
 /**
  * Initialize and configure ProductModel
  * @return ProductModel
  */
 $get: ['productResource', function(productResource) {
   this.instance._resource = productResource;
   return this.instance;
 }]
}
productModule.provider('Product', productResource);

