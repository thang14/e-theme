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
    
    //onSaveAndFinish
    $scope.onSaveAndFinish = goBack;
    var goBack = function() {
        $state.go('product');
    }
    $scop.onDelete = goBack;
    $scope.onSaveAndFinish = goBack;
    
    
    /**
     * ACTIONS
     * -----------------------------------------------
     */
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
            templateUrl: '/web/product/modal/media-list.html',
            controller: 'mediaListController',
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


.controller('variantDetailController', [
   '$scope', 
   '$state',
   'variantItem', 
   'productItem', 
   function($scope, $state, variantItem, productItem) {
    var variant = $scope.variant = variantItem;
    var product = $scope.product = productItem;
    
    var options = $scope.options = product.variant_options;
    
    $scope.$watch('option', function(option) {
      option.forEach(function(value, index) {
        var idx = options[index].indexOf(value);
        if(idx === -1) {
          options[index].push(value);
          idx = options[index].length - 1;
          variant.option[index] = idx;
        }
      });
    });
    
    
    
    /**
     * EVENTS
     * -----------------------------------------------
     */
    var goBack = function() {
        $state.go('product', {
          id: product.id,
        });
    }
    $scope.onSave = function(fn) {
      product.variants.push(resource);
      product.$save(fn);
    }
    $scope.onSaveAndFinish = function() {
      scope.onSave(goBack);
    }
    $scope.onDelete = goBack;
    $scope.onCancel = goBack;
}])

.controller('mediaListController', [
 '$scope', 
 'variant', 
 '$uibModalInstance',
  function($scope, variant, $uibModalInstance) {
   $scope.resource = variant;
   $scope.items = variant.medias;
   
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
}]);



