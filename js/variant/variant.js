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
          options: [{
              name: 'color_name',
              value: "Color"
          },{
              name: 'size_name',
              value: "Size"
          },{
              name: 'style_name',
              value: "Style"
          }]
      }
      return variantOption;
    }
  ]);
