'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('productResource', ['resourceService', 'mediaResource'
    var Products = resourceService('product');
    
    /**
     * Upload file
     * @param array $file
     */
    Products.prototype.$upload = function($files) {
        if($files && $files.length > 0) {
            $files.forEach(function(file) {
                mediaResource.$upload(file, function(data) {
                    this.medias.push(data);
                });
            }, this)
        }
    }
    
    return Products;
]);
