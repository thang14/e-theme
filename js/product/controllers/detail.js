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
    
    /**
     * Gets variant default
     * @return VariantResource
     */
    $scope.getVariantDefault = function() {
      var variants = $scope.resource.variants;
      if(!angular.isUndefined(variants) && variants.length > 0) {
        return variants[0];
      }
      return $scope.resource.current;
    }
    
    $scope.upload = function($files) {
      angular.forEach($files, function(file) {
        Media.upload(file, function(res) {
          $scope.getCurrentVariant().addMedia(res);
        });
      });
    }
  }
])


/**
 * Product Detail Controller
 */
.controller('productVariantsController', ['$scope', 'VariantOptions', 'variantResource',
  function($scope, $state, productItem) {
   
    // Default
    $scope.resource.variants = $scope.resource.variants || [];
    $scope.resource.variant_options = $scope.resource.variant_options : [];
    
    // Map data
    var optionMaps = _.indexBy($scope.resource.variant_options, 'name');
    var itemMaps = _.indexBy($scope.resource.variants, 'option');
    
    
    /**
     * Select product theme
     * @param integer| null index key of the themes
     * @return void;
     */
    $scope.selectTheme = function(index) {
      var options = [], 
          names = VariantOptions.themes[index];
          
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
          if(angular.isUndefined(optionMaps[value])) {
            optionMaps[value] = {
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
          if(angular.isUndefined(itemMaps[item.join('_')])) {
            itemMaps[item.join('_')] = new variantResource({
              option: item.join('_'),
              price: 0,
              sale: 0,
              quantity: 1,
            });
          }
          
          $scope.resource.variants.push(itemMaps[item.join('_')]);
          return;
        }
        $scope.generateVariants(key + 1, item);
      });
    };
    
    $scope.removeVariant = function(variant) {
      var index = $scope.resource.variants.indexOf(variant);
      if(index >= 0) {
        if(variant.$id()) {
          variant.$remove();
        }
        $scope.resource.variants.splice(index, 1);
      }
    }
  }
])


 
 
 




