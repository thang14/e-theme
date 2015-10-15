module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      options: {
        jshintrc: true,
      },
      kernel: {
        files:{
          src: { src: 'js/kernel/**/*.js' },
        }
      },
      dashboard: {
        files:{
          src: { src: 'js/dashboard/**/*.js' },
        }
      },
      product: {
        files:{
          src: { src: 'js/product/**/*.js' },
        }
      },
      orders: {
        files:{
          src: { src: 'js/orders/**/*.js' },
        }
      },
      shop: {
        files:{
          src: { src: 'js/shop/**/*.js' },
        }
      },
      settings: {
        files:{
          src: { src: 'js/settings/**/*.js' },
        }
      },
      auth: {
        files:{
          src: { src: 'js/auth/**/*.js' },
        }
      },
    },
    uglify: {
      scriptCore: {
        files: {
          'dist/js/core.js': [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
          ]
        }
      },
      scriptApp: {
        files: {
          'dist/js/app.js': ['js/**/*.js']
        }
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
      fontsBootstrap: {
        expand: true,
        src: 'bower_components/bootstrap-sass/assets/fonts/*',
        dest: 'dist/'
      },
      fontsAwesome: {
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
