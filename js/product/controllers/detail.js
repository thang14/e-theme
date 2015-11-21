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
      
    $scope.resource.variants = $scope.resource.variants || [];
    $scope.resource.variant_options = $scope.resource.variant_options : [];
    var variantOptionMap = ArrayUtil.index($scope.resource.variant_options, 'name');
    var variantMap = ArrayUtil.index($scope.resource.variants, 'options');
    /**
     * Select product theme
     * @param integer| null index key of the themes
     * @return void;
     */
    $scope.selectTheme = function(index) {
      var options = [], 
          names = VariantOptions.themes[index],
          maps = variantOptionMap;
          
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
    
    var getVariants = function(key, data) {
      
    }
    
    /**
     * GenerateVariants
     * @return void;
     */
    $scope.generateVariants = function() {
      $scope.resource.variants = getVariants();
    };
    
    
  }
])


 
 
 




