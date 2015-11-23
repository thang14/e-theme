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
    
    /**
     * Gets variant default
     * @return VariantResource
     */
    $scope.getVariantDefault = function() {
      var variants = $scope.resource.variants;
      if(!angular.isUndefined(variants) && variants.length > 0) {
        return variants[0];
      }
      return $scope.resource.current;
    }
    
    $scope.upload = function($files) {
      $scope.getCurrentVariant().upload($files);
    }
  }
])


/**
 * Product Detail Controller
 */
.controller('productVariantsController', ['$scope', 'VariantOptions', 'variantResource',
  function($scope, $state, productItem) {
   
    // Default
    $scope.resource.variants = $scope.resource.variants || [];
    $scope.resource.variant_options = $scope.resource.variant_options : [];
    
    
    $scope.selectTheme = function(index) {
      $scope.resource.selectTheme(index);
    };
    
    $scope.generateVariants = function() {
      $scope.resource.generateVariants(index);
    };
    
    $scope.removeVariant = function(variant) {
      $scope.resource.removeVariant(variant);
    }
  }
])


 
 
 




