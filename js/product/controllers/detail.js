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
    
    $scope.upload = function($files) {
      $scope.resource.upload($files);
    }
    
    $scope.removeFile = function(file) {
      $scope.resource.removeFile(file);
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


 
 
 /**
 * Product Detail Controller
 */
.controller('variantFileList', ['$scope', 'VariantOptions', 'variantResource',
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


 
 




