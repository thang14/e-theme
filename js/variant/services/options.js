'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.factory('VariantOptions', [
  function() {
    var obj = {};
    
    /**
     * Themes
     */
    object.themes = [
    
      // Only
      ['color_name'],
      ['size_name'],
      ['style_name'],
      ['configure_name'],
      ['weight_name'],
      ['cover_tyle_name'],
      
      
    ];
    
    object.labels = {
      color_name: "Màu sắc",
      size_name: "Kích thước",
      style_name: "Kiểu dáng",
      configure_name: "Cấu hình",
      weight_name: "Trọng lượng",
      cover_type_name: "Loại bìa"
    }
    
    
    
    return obj;
  }
]);
