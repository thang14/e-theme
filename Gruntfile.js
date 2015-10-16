var files = require('./adminFiles').files;
var util = require('./lib/grunt/utils.js');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: true,
      },
      node: {
        files: { 
          src: ['*.js', 'lib/**/*.js', 'js/**/*.js'] 
        },
      }
    },
    concat: {
      kernel: {
        dest: 'dist/js/kernel.js',
        src: util.wrap([files['modules']['kernel']], 'module')
      },
      product: {
        dest: 'dist/js/product.js',
        src: util.wrap([files['modules']['product']], 'module')
      },
      auth: {
        dest: 'dist/js/auth.js',
        src: util.wrap([files['modules']['auth']], 'module')
      },
      section: {
        dest: 'dist/js/section.js',
        src: util.wrap([files['modules']['section']], 'module')
      },
      order: {
        dest: 'dist/js/order.js',
        src: util.wrap([files['modules']['order']], 'module')
      },
      shop: {
        dest: 'dist/js/shop.js',
        src: util.wrap([files['modules']['shop']], 'module')
      },
      variant: {
        dest: 'dist/js/variant.js',
        src: util.wrap([files['modules']['variant']], 'module')
      },
      reports: {
        dest: 'dist/js/reports.js',
        src: util.wrap([files['modules']['reports']], 'module'),
      },
      reports: {
        dest: 'dist/js/dashboard.js',
        src: util.wrap([files['modules']['dashboard']], 'module'),
      }
    },
    uglify: {
        core: {
            files:{
                "dist/js/core.js":[
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
               ],
           }
       },
       dist: {
            options: {
              sourceMap: true
            },
            files:{
                "dist/js/app.js":[
                    'js/app.js',
                    'js/environment.js',
                    'dist/js/kernel.js',
                    'dist/js/product.js',
                    'dist/js/auth.js',
                    'dist/js/section.js',
                    'dist/js/order.js',
                    'dist/js/shop.js',
                    'dist/js/variant.js',
                    'dist/js/reports.js',
                    'dist/js/dashboard.js',
                    'js/bootstrap.js',
              ],
           }
        }

  },
    ngtemplates:  {
      web:{
        src:'web/**/*.html',
        dest:'dist/js/templates.js',
        options:{
          module: "app.kernel",
          prefix: '/',
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
        cwd: 'bower_components/bootstrap-sass/assets/fonts/',
        src: '**',
        dest: 'dist/fonts/bootstrap',
        flatten: true,
        filter: 'isFile',
      },
      awesome: {
        expand: true,
        cwd: 'bower_components/font-awesome-sass/assets/fonts/',
        src: '**',
        dest: 'dist/fonts/font-awesome',
        flatten: true,
        filter: 'isFile',
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
        files: ['web/**/*.html'],
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  
  grunt.registerTask('js', ['concat', 'uglify:dist']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('temp', ['ngtemplates']);

  // Default task(s).
  grunt.registerTask('default', ['js', 'css', 'copy', 'temp']);

};
