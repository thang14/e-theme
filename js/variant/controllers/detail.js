'use strict';


variantModule.controller('variantDetailController', ['$scope', '$state', 'productItem', 'variantItem'
     function($scope, $state, productItem, variantItem) {
          
          $scope.productItem = productItem;
          $scope.resource = variantItem;
          
          var goBack = function() {
               $state.go('product', {id: productItem.id});
          }
          
          $scope.onSave = function() {
               $scope.productItem.variants.push($scope.resource);
               goBack();
          }
          
          $scope.onCancel = goBack;
          $scope.onRemove = goBack;
          
          
     }
]);
