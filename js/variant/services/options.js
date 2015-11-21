'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.service('VariantOptions', [
  function() {
    var obj = {};
    
    /**
     * Themes
     */
    obj.themes = [
    
      // Only
      ['color_name'],
      ['size_name'],
      ['style_name'],
      ['configure_name'],
      ['weight_name'],
      ['cover_tyle_name'],
      
      
    ];
    
    obj.labels = {
      color_name: "Màu sắc",
      size_name: "Kích thước",
      style_name: "Kiểu dáng",
      configure_name: "Cấu hình",
      weight_name: "Trọng lượng",
      cover_type_name: "Loại bìa"
    }
    
    obj.getDropdownList = function() {
      var results = [];
      angular.forEach(this.themes, function(values, index) {
        var result = [];
        angular.forEach(values, function(value) {
          result.push(this.labels[value]);
        }, this);
        results[index] = result.join(', ');
      }, this);
      return results;
    }
    
    obj.getOptions = function(index) {
      var names = this.themes[index];
      if(names == undefined) {
        return undefined;
      }
      var options = [];
      angular.forEach(names, function(name) {
        options.push({
          name: name,
          label: this.labels[name],
          items[0],
        })
      })
    }
    
    return obj;
  }
]);
