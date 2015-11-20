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
                mediaResource.$upload(file).success( function(data) {
                    this.medias.push(data);
                }.bind(this));
            }, this)
        }
    }
    
    /**
     * Remove file
     */
    Products.prototype.$removeFile = function(index) {
        this.medias[index].$remove(function() {
            this.medias.splice(index, 1);
        }.bind(this));
        
    }
    
    return Products;
]);
