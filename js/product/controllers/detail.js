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
    
    // Action
    $scope.action = {
      name: null,
      item: null,
    };
    
    //Goback
    var goBack = function() {
        $state.go('product');
    }
    
    //Delete
    $scop.onDelete = goBack;
    
    //onSaveAndFinish
    $scope.onSaveAndFinish = goBack;
    
    // Set action
    $scope.setAction = function(item, name) {
      this.action.name = name;
      this.action.item = item;
    }
    
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
.controller('productVariantMedias', ['$scope'
  function($scope, $state, productItem) {
    var item = $scope.action.item;
    // Upload
    $scope.upload = function($files) {
      item.upload($files);
    }
    
    // Remove file
    $scope.removeFile = function(file) {
      item.removeFile(file);
    }
  }
])


 
 




