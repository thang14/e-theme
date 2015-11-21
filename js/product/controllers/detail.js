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
    
    // Setting variant
    $scope.resource.variants = Variant.$instances($scope.resource.variants) || [];
    $scope.resource.variant_options = $scope.resource.variant_options || [];
    
    //mapVariant
    var mapVariant = ArrayHelper.index($scope.resource.variants, 'options');
    
    /**
     * Themes
     */
    $scope.themeDropdownList = Variant.getThemeDropdownList();
    
    // Select themes
    $scope.selectTheme = function(theme) {
        $scope.resource.variant_options = VariantOption.getOptions(theme);
    }
    
    // Select themes
    $scope.generateVariants = function() {
        $scope.resource.variants = VariantOption.generateVariants();
    }
    
    
    // Remove variant
    $scope.removeVariant = function(variant) {
        var index = $scope.resource.variants.indexOf(variant);
        if(index != =1) {
            variant.$remove(function() {
                $scope.resource.variants.splice(index, 1);
            });
        }
    }
    
    // Upload for variant
    $scope.uploadForVariant = function(variant) {
        uploadMedia.call(this, variant);
    }
    
}]);
 
 
 
 
 




