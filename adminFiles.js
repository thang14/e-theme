'use strict';

var adminFiles = {
  'modules': {

    'kernel': [
      'js/kernel/kernel.js',
      'js/kernel/config/**/*.js',
      'js/kernel/controllers/**/*.js',
      'js/kernel/services/**/*.js',

    ],
    'product': [
      'js/product/product.js',
      'js/product/config/**/*.js',
      'js/product/controllers/**/*.js',
      'js/product/resources/**/*.js',
      'js/product/services/**/*.js',
    ],
    'auth': [
      'js/auth/auth.js',
      'js/auth/config/**/*.js',
      'js/auth/controllers/**/*.js',
      'js/auth/resources/**/*.js',
      'js/auth/services/**/*.js',
    ],
    'shop': [
      'js/shop/shop.js',
      'js/shop/config/**/*.js',
      'js/shop/controllers/**/*.js',
      'js/shop/resources/**/*.js',
      'js/shop/services/**/*.js',
    ],
    'section': [
      'js/section/section.js',
      'js/section/config/**/*.js',
      'js/section/resources/**/*.js',
      'js/section/controllers/**/*.js',
      'js/section/services/**/*.js',
    ],
    'order': [
      'js/order/order.js',
      'js/order/config/**/*.js',
      'js/order/resources/**/*.js',
      'js/order/controllers/**/*.js',
      'js/order/services/**/*.js',
    ],
    'reports': [
      'js/reports/reports.js',
      'js/reports/config/**/*.js',
      'js/reports/resources/**/*.js',
      'js/reports/controllers/**/*.js',
      'js/reports/services/**/*.js',
    ],
    'settings': [
      'js/settings/settings.js',
      'js/settings/config/**/*.js',
      'js/settings/resources/**/*.js',
      'js/settings/controllers/**/*.js',
      'js/settings/services/**/*.js',
    ],
    'dashboard': [
      'js/dashboard/dashboard.js',
      'js/dashboard/config/**/*.js',
      'js/dashboard/resources/**/*.js',
      'js/dashboard/controllers/**/*.js',
      'js/dashboard/services/**/*.js',
    ],
    'media': [
      'js/media/media.js',
      'js/media/config/**/*.js',
      'js/media/resources/**/*.js',
      'js/media/controllers/**/*.js',
      'js/media/services/**/*.js',
    ],

    'base': [
      'js/base/base.js'
    ],
  },
};

if (exports) {
  exports.files = adminFiles;
  exports.mergeFilesFor = function() {
    var files = [];

    Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
      adminFiles[filegroup].forEach(function(file) {
        // replace @ref
        var match = file.match(/^\@(.*)/);
        if (match) {
          files = files.concat(adminFiles[match[1]]);
        } else {
          files.push(file);
        }
      });
    });

    return files;
  };
}
