'use strict';

var angularFiles = {
  'modules': {
    'kernel': [
      'js/kernel/kernel.js',
    ],
    'product': [
      'js/product/product.js',
    ],
    'auth': [
      'js/auth/auth.js',
    ],
    'variant': [
      'js/variant/variant.js'
    ],
    'shop': [
      'js/shop/shop.js'
    ],
    'section': [
      'js/shop/section.js'
    ],
    'order': [
      'js/order/order.js'
    ],
    'reports': [
      'js/order/reports.js'
    ],
    'settings': [
      'js/settings/settings.js'
    ],
    'dashboard': [
      'src/dashboard/dashboard.js'
    ]
  },
};

if (exports) {
  exports.files = angularFiles;
  exports.mergeFilesFor = function() {
    var files = [];

    Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
      angularFiles[filegroup].forEach(function(file) {
        // replace @ref
        var match = file.match(/^\@(.*)/);
        if (match) {
          files = files.concat(angularFiles[match[1]]);
        } else {
          files.push(file);
        }
      });
    });

    return files;
  };
}
