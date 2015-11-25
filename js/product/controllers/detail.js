'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
 
productModule

/**
 * Product Detail Controller
 */
.controller('productDetailController', [
 '$scope', 
 '$state',  
 'productItem', 
 'sections', 
 'i18nNotifications', 
 '$uibModal',
  function($scope, $state, productItem, sections, i18nNotifications, $uibModal) {
      
    var product = $scope.product = productItem;
    
    $scope.sections = sections;
    
    //Goback
    var goBack = function() {
        $state.go('product');
    }
    
    //Delete
    $scop.onDelete = goBack;
    
    //onSaveAndFinish
    $scope.onSaveAndFinish = goBack;
    
    
    
    $scope.newVariant = function() {
      $state.go('product.detail.variant.new');
    }
    
    $scope.viewVariant = function(id) {
      $state.go('product.detail.variant.detail', {
        variantId: id
      });
    }
    
    $scope.variantMediasModal = function(variant) {
      return {
        open: function(size) {
          return $uibModal.open({
            animation: true,
            templateUrl: '/web/product/media-list',
            controller: 'MediaListCtrl',
            size: size,
            resolve: {
              variant: function () {
                return variant;
              }
            }
          });

        }
      }
    }
    
  }
])


.controller('VariantDetailCtrl', [
   '$scope', 
   '$state',
   'variantItem', 
   'productItem', 
   function($scope, $state, variantItem, productItem) {
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

.controller('MediaListCtrl', [
 '$scope', 
 'variant', 
 '$uibModalInstance',
  function($scope, variant, $uibModalInstance) {
   $scope.variant = variant;
   $scope.items = variant.medias;
   
    $scope.ok = function () {
      $uibModalInstance.close();
    };
  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
}]);



