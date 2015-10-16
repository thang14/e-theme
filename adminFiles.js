'use strict';

var angularFiles = {
  'modules': {
    'kernel': [
      'js/kernel/**/*.js'
    ],
    'product': [
      'js/product/**/*.js'
    ],
    'auth': [
      'js/auth/**/*.js'
    ],
    'variant': [
      'js/variant/**/*.js'
    ],
    'shop': [
      'js/shop/**/*.js'
    ],
    'section': [
      'js/shop/**/*.js'
    ],
    'order': [
      'js/order/**/*.js'
    ],
    'reports': [
      'js/order/**/*.js'
    ],
    'settings': [
      'js/settings/**/*.js'
    ],
    'dashboard': [
      'src/dashboard/**/*.js'
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
