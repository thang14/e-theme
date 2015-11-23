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
      
    var resource = $scope.resource = productItem;
    
    $scope.sections = sections;
    
    // Action
    var action = $scope.action = {
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
      action.name = name;
      action.item = item;
    }
    
    $scope.upload = function($files) {
      resource.upload($files);
    }
    
    $scope.removeFile = function(file) {
      resource.removeFile(file);
    }
  }
])


/**
 * Product Detail Controller
 */
.controller('productVariantsController', ['$scope', 'VariantOptions', 'variantResource',
  function($scope, $state, productItem) {
    var resource = $scope.resource;
    
    var defaults = {
      variants: [],
      variant_options: []
    }
    
    angular.extend(defaults, resource);
    
    
    $scope.selectTheme = function(index) {
      resource.selectTheme(index);
    };
    
    $scope.generateVariants = function() {
      resource.generateVariants(index);
    };
    
    $scope.removeVariant = function(variant) {
      resource.removeVariant(variant);
    }
  }
])


 
 
 /**
 * Product Detail Controller
 */
.controller('productVariantDetail', ['$scope'
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


 
 




