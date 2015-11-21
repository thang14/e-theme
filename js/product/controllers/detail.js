'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */

// ArrayHelper
var ArrayHelper = {
    // Index
    index: function(arr, field, prefix) {
        prefix = prefix || '_';
        return arr.map(function(obj) {
            var rObj = {};
            var index = obj[field];
            if(typeof index === Array) {
                index = index.join(prefix);
            }
            rObj[index] = obj;
            return rObj;
        });
    }
}

var uploadMedia = function($scope, resource, file, instance) {
    resource.$upload(file, function(response) {
        instance.medias.push(response.data);
        $scope.onUploaded(response);
    });
}

var removeMedia = function($scope, resource, file, instance) {
    file.$remove(function() {
       var index = instance.medias.indexOf(file); 
       instance.medias.splice(index, 1);
       $scope.onRemoveMedia(file);
    });
}

productModule

/**
 * Product Detail Controller
 */
.controller('productDetailController', ['$scope', '$state',  'productItem', 'sections',
    function($scope, $state, productItem) {
        
        $scope.resource = productItem;
        
        $scope.sections = sections;
        
        //Goback
        var goBack = function() {
            $state.go('product');
        }
        
        //Delete
        $scop.onDelete = goBack;
        
        //onSaveAndFinish
        $scope.onSaveAndFinish = goBack;
    }
])

/**
 * ProductVariantsController
 */
.controller('productVariantsController', [ 
    '$scope', 'VariantOption', 'variantResource', 'Media',
    function($scope, VariantOption, Variant, Media) {
    
}]);
 
 
 
 
 




