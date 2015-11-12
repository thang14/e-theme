'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantModule
 */
var variantModule = angular.module("app.variant", []);


/**
 * Variant Option
 */
variantModule.factory('variantOption', [
    function() {
      var variantOption = {
          options: [
              'color_name', 
              'size_name', 
              'style_name'
          ],
          options_values: [
              'Color',
              'Size',
              'Style'
          ]
      }
      return variantOption;
    }
  ]);
