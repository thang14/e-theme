'use strict';


variantModule.controller('variantDetailController', ['$scope', 'productItem', 'variantItem'
     function($scope, productItem, variantItem) {
          
          $scope.productItem = productItem;
          $scope.resource = variantItem;
          
          
          $scope.onSave = function() {
               $scope.productItem.variants.push($scope.resource);
          }
     }
]);
