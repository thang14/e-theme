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
    'settings': [
      'js/settings/settings.js'
    ],
    'dashboard': [
      'src/dashboard/dashboard.js'
    ],
    'ngTouch': [
      'src/ngTouch/touch.js',
      'src/ngTouch/swipe.js',
      'src/ngTouch/directive/ngClick.js',
      'src/ngTouch/directive/ngSwipe.js'
    ],
    'ngAria': [
      'src/ngAria/aria.js'
    ]
  },

  'angularScenario': [
    'src/ngScenario/Scenario.js',
    'src/ngScenario/browserTrigger.js',
    'src/ngScenario/Application.js',
    'src/ngScenario/Describe.js',
    'src/ngScenario/Future.js',
    'src/ngScenario/ObjectModel.js',
    'src/ngScenario/Runner.js',
    'src/ngScenario/SpecRunner.js',
    'src/ngScenario/dsl.js',
    'src/ngScenario/matchers.js',
    'src/ngScenario/output/Html.js',
    'src/ngScenario/output/Json.js',
    'src/ngScenario/output/Xml.js',
    'src/ngScenario/output/Object.js'
  ],

  'angularTest': [
    'test/helpers/*.js',
    'test/ngScenario/*.js',
    'test/ngScenario/output/*.js',
    'test/*.js',
    'test/auto/*.js',
    'test/ng/**/*.js',
    'test/ngAnimate/*.js',
    'test/ngMessages/*.js',
    'test/ngCookies/*.js',
    'test/ngResource/*.js',
    'test/ngRoute/**/*.js',
    'test/ngSanitize/**/*.js',
    'test/ngMock/*.js',
    'test/ngTouch/**/*.js',
    'test/ngAria/*.js'
  ],

  'karma': [
    'bower_components/jquery/dist/jquery.js',
    'test/jquery_remove.js',
    '@angularSrc',
    '@angularSrcModules',
    '@angularScenario',
    '@angularTest'
  ],

  'karmaExclude': [
    'test/jquery_alias.js',
    'src/angular-bootstrap.js',
    'src/ngScenario/angular-bootstrap.js',
    'src/angular.bind.js'
  ],

  'karmaScenario': [
    'build/angular-scenario.js',
    'build/docs/docs-scenario.js'
  ],

  "karmaModules": [
    'build/angular.js',
    '@angularSrcModules',
    'src/ngScenario/browserTrigger.js',
    'test/helpers/*.js',
    'test/ngMessageFormat/*.js',
    'test/ngMock/*.js',
    'test/ngCookies/*.js',
    'test/ngRoute/**/*.js',
    'test/ngResource/*.js',
    'test/ngSanitize/**/*.js',
    'test/ngTouch/**/*.js',
    'test/ngAria/*.js'
  ],

  'karmaJquery': [
    'bower_components/jquery/dist/jquery.js',
    'test/jquery_alias.js',
    '@angularSrc',
    '@angularSrcModules',
    '@angularScenario',
    '@angularTest'
  ],

  'karmaJqueryExclude': [
    'src/angular-bootstrap.js',
    'src/ngScenario/angular-bootstrap.js',
    'test/jquery_remove.js',
    'src/angular.bind.js'
  ]
};

angularFiles['angularSrcModules'] = [].concat(
  angularFiles['angularModules']['ngAnimate'],
  angularFiles['angularModules']['ngMessageFormat'],
  angularFiles['angularModules']['ngMessages'],
  angularFiles['angularModules']['ngCookies'],
  angularFiles['angularModules']['ngResource'],
  angularFiles['angularModules']['ngRoute'],
  angularFiles['angularModules']['ngSanitize'],
  angularFiles['angularModules']['ngMock'],
  angularFiles['angularModules']['ngTouch'],
  angularFiles['angularModules']['ngAria']
);

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
