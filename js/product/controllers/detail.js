'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */

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
    
    /**
     * Themes
     */
    $scope.themeDropdownList = Variant.getThemeDropdownList();
    
    // Select themes
    $scope.selectTheme = function(theme) {
        $scope.resource.variant_options = VariantOption.getOptions(theme);
    }
    
    // Select themes
    $scope.generateVariants = function(key, data) {
        
    }
    
    
    // Remove variant
    $scope.removeVariant = function(variant) {
        var index = $scope.resource.variants.indexOf(variant);
        if(index != =1) {
            $scope.resource.variants.splice(index, 1);
        }
    }
    
}]);
 
 
 
 
 




