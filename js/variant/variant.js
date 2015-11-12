'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantModule
 */
var variantModule = angular.module("app.variant", []);



variantModule.factory('variantOption', [
    function() {
      var variantOption = {
          options: [
              'color_name', 
              'size_name', 
              'style_name'
          ]
      }
      return variantOption;
    }
  ]);
