var files = require('./adminFiles').files;
var util = require('./lib/grunt/utils.js');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    uglify: {
      core: {
        dest: 'dist/js/core.js',
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-ui-router/release/angular-ui-router.min.js',
          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
        ]
      },
      kernel: {
        dest: 'dist/js/kernel.js',
        src: util.wrap(files['modules']['kernel'], 'module')
      },
      product: {
        dest: 'dist/js/product.js',
        src: util.wrap(files['modules']['product'], 'module')
      },
      auth: {
        dest: 'dist/js/auth.js',
        src: util.wrap(files['modules']['auth'], 'module')
      },
      section: {
        dest: 'dist/js/section.js',
        src: util.wrap(files['modules']['section'], 'module')
      },
      order: {
        dest: 'dist/js/order.js',
        src: util.wrap(files['modules']['order'], 'module')
      },
      shop: {
        dest: 'dist/js/shop.js',
        src: util.wrap(files['modules']['shop'], 'module')
      },
      variant: {
        dest: 'dist/js/variant.js',
        src: util.wrap(files['modules']['variant'], 'module')
      },
      reports: {
        dest: 'dist/js/reports.js',
        src: util.wrap(files['modules']['reports'], 'module')
      },
      all: {
        dest: 'dist/js/app.js',
        src: [
          'js/app.js',
          'js/bootstrap',
          'js/environment',
          'dist/js/kernel',
          'dist/js/product',
          'dist/js/auth',
          'dist/js/section',
          'dist/js/order',
          'dist/js/shop',
          'dist/js/variant',
          'dist/js/reports',
        ],
      }
    },
    ngtemplates:  {
      web:{
        src:'web/**.html',
        dest:'dist/js/templates.js',
        options:{
          htmlmin:{
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        }
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        src: 'bower_components/bootstrap-sass/assets/fonts/*',
        dest: 'dist/'
      },
      awesome: {
        expand: true,
        src: 'bower_components/font-awesome-sass/assets/fonts/*',
        dest: 'dist/'
      },
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['js'],
        options: {
          spawn: false,
        },
      },
      templates: {
        files: ['web/**.html'],
        tasks: ['temp'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('temp', ['ngtemplates']);

  // Default task(s).
  grunt.registerTask('default', ['js', 'css', 'copy', 'temp']);

};
