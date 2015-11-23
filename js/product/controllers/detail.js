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
  function($scope, $state, productItem, sections) {
      
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
]);


