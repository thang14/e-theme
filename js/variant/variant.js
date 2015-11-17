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
              value: "Color",
              items: ['Red', 'Blur', 'While']
          },{
              name: 'size_name',
              value: "Size",
              items: [33, 34, 35]
          },{
              name: 'style_name',
              value: "Style",
              items: ['15 inch', '13.5 inch', '13 inch']
          }]
      }
      return variantOption;
    }
  ]);
