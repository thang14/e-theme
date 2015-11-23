'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('productResource', ['resourceService', 'mediaResource'
    var productResource = resourceService('product');
    
    productResource.prototype.upload = function(file) {
        var variant = this.getVariantDefault();
        variant.medias = variant.medias || [];
        variant.medias.push(file);
        variant.upload = mediaResource.upload(file);
        // Success
        file.upload.success(function(data, status, headers, config ) {
            file = new mediaResource(data);
            if(variant.id) {
                variant.$save();
            }
        });
        // Progress
        file.upload.progress(function(evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        })
    }
    
    productResource.prototype.removeFile = function(file) {
        var variant = this.getVariantDefault();
        var index = variant.medias.indexOf(file);
        file.$remove();
        variant.medias.splice(index, 1);
        if(variant.id) {
            variant.$save();
        }
        
    }
    return productResource;
]);
