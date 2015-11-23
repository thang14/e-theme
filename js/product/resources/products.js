'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.factory('productResource', ['resourceService', 'mediaResource'
    var productResource = resourceService('product');
    
    productResource.prototype.upload = function(file) {
        var item = this.getItemDefault();
        item.medias = item.medias || [];
        item.medias.push(file);
        file.upload = mediaResource.upload(file);
        // Success
        file.upload.success(function(data, status, headers, config ) {
            file = new mediaResource(data);
        });
        // Progress
        file.upload.progress(function(evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        })
    }
    return productResource;
]);
