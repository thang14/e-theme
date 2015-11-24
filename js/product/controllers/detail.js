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
      
    var product = $scope.product = productItem;
    
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
    var variant = $scope.variant = variantItem;
    var product = $scope.product = productItem;
    
    variant.product_id = product.id;
    $scope.options = product.variant_options;
    
    $scope.$watch('option', function(option) {
      option.forEach(function(value, index) {
        var idx = $scope.options[index].indexOf(value);
        if(idx === -1) {
          $scope.options[index].push(value);
          idx = $scope.options[index].length - 1;
          $scope.resource.option[index] = idx;
        }
      });
    });
    
     //Goback
    var goBack = function() {
        $state.go('product', {
          id: product.id,
        });
    }
    
    $scope.onSave = function(fn) {
      product.variants.push(resource);
      product.$save(fn);
    }
    
    $scope.onDelete = goBack;
    
    $scope.onSaveAndFinish = function() {
      scope.onSave(goBack);
    }
    
    $scope.onCancel = goBack;
}])



