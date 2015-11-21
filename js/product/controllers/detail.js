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
  }
])


/**
 * Product Detail Controller
 */
.controller('productVariantsController', ['$scope', 'VariantOptions', 'ArrayUtil'
  function($scope, $state, productItem) {
   
    // Default
    $scope.resource.variants = $scope.resource.variants || [];
    $scope.resource.variant_options = $scope.resource.variant_options : [];
    
    // Map data
    var variantOptionMaps = ArrayUtil.index($scope.resource.variant_options, 'name');
    var variantMaps = ArrayUtil.index($scope.resource.variants, 'options');
    
    
    /**
     * Select product theme
     * @param integer| null index key of the themes
     * @return void;
     */
    $scope.selectTheme = function(index) {
      var options = [], 
          names = VariantOptions.themes[index],
          maps = variantOptionMaps;
          
      // Reset theme
      if(index === null) {
        $scope.resource.theme = null;
        return;
      }
      
      
      
      
      // Options
      var names = VariantOptions.themes[index];
      
      names.forEach(function(values, index) {
        var result = [];
        values.forEach(function(value) {
          if(maps[value] == undefined) {
            maps[value] = {
              name: value,
              label: VariantOptions.labels[value],
              items: []
            }
          }
          result.push(maps[value]);
        })
        options.push(result);
      });
      
      $scope.resource.variant_options = options;
    };
    
    /**
     * GenerateVariants
     * @return void;
     */
    $scope.generateVariants = function(key, data) {
      var maps = variantMaps;
      key = key || 0;
      if(key === 0) {
        $scope.resource.variants = [];
      }
      
      var options = $scope.resource.variant_options;
      data = data || [];
      (options[key].items).forEach(function(value, index) {
        var item = angular.copy(data);
        item.push(index);
        if(!options[key + 1]) {
          if(maps[item.join('_')] == undefined) {
            maps[item.join('_')] = {
              options: item,
              price: 0,
              sale: 0,
              quantity: 1,
            }
          }
          
          $scope.resource.variants.push(maps[item.join('_')]);
          return;
        }
        $scope.generateVariants(key + 1, item);
      });
    };
    
    
  }
])


 
 
 




