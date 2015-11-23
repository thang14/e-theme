'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
 
productModule

/**
 * Product Detail Controller
 */
.controller('productDetailController', ['$scope', '$state',  'productItem', 'sections', 'i18nNotifications',
  function($scope, $state, productItem, sections, i18nNotifications) {
      
    var resource = $scope.resource = productItem;
    
    $scope.sections = sections;
    
    // Action
    var action = $scope.action = {
      item: null,
      view: null,
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
      action.item = item;
      action.view = '/web/product/'+name,
    }
    
    [
      'selectTemplate',
      'templateDropdownList',
      'generateVariants',
      'removeVariant',
      'removeFile',
    ].forEach(function(value) {
      $scope[value] = resource[value];
    });
    
    $scope.upload = function($files) {
      if($files && $files.length > 0) {
        $files.forEach(function(file) {
          resource.upload(file);
        });
      }
    }
  }
])


.controller('VariantDetailController', ['$scope', 'variantItem', 'productItem', function($scope, variantItem, productItem) {
    var resource = $scope.resource = variantItem;
    $scope.resource.product_id = productItem.id;
    $scope.options = variantItem.variant_options;
    $scope.onSave = function() {
      productItem.variants.push(resource);
      productItem.$save();
    }
    
}]);


