var files = require('./adminFiles').files;
var util = require('./lib/grunt/utils.js');

// Bower components
var bowerComponents = function(arr) {
  var results = [];
  if(typeof arr === "String") {
    arr = [arr];
  }
  arr.forEach(function(value) {
    results.push('bower_components/' + value);
  })
  return arr;
}

var getConcatModules = function(modules) {
  var result = {};
  Object.keys(modules).forEach(function(moduleName) {
    result[moduleName] = {
      dest: 'dist/js/'+moduleName+'.js',
      src: util.wrap([modules[moduleName]], 'module'),
    };
  });
  return result;
}


var getModulesUglify = function(modules) {
  var results = [];
  Object.keys(modules).forEach(function(moduleName) {
    results.push('dist/js/'+moduleName+'.js');
  });
  return results;
}

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
    concat: getConcatModules(files['modules']),
    uglify: {
        core: {
            files:{
                "dist/js/core.js":bowerComponents([
                    'jquery/dist/jquery.min.js',
                    'angular/angular.min.js',
                    'angular-ui-router/release/angular-ui-router.min.js',
                    'bootstrap-sass/assets/javascripts/bootstrap.min.js',
                    'ng-file-upload/ng-file-upload-all.min.js',
                    'angular-input-masks/angular-input-masks-standalone.min.js',
                    'ng-tags-input/ng-tags-input.min.js',
        		        'angular-ui-grid/ui-grid.js',
        		        'angular-loading-bar/build/loading-bar.min.js',
                    'angular-notify/dist/angular-notify.min.js',
                    'angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'angular-resource/angular-resource.min.js',
                    'underscore/underscore.min.js',
               ]),
           }
       },
       
       modules: {
            options: {
              sourceMap: true
            },
            files:{
                "dist/js/modules.js": getModulesUglify(files['modules']),
           }
        }
       
       dist: {
            options: {
              sourceMap: true
            },
            files:{
                "dist/js/app.js":[
                    'js/app.js',
                    'js/constant.js',
                    'dist/js/modules.js',
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
    
    karma: {
      unit: {
        files: [
          { src: ['tests/**/*.js'] }
        ]
      }
    },

    copy: {
        bootstrap: {
            files: [{
                src: bowerComponents('bootstrap-sass/assets/fonts/**'),
                dest: 'dist/fonts/bootstrap/',
                expand: true,
                flatten: true

            }]
        },

        awesome: {
            files: [{
                src: bowerComponents('/font-awesome-sass/assets/fonts/**'),
                dest: 'dist/fonts/font-awesome/',
                expand: true,
                flatten: true

            }]
        },

        i18n: {
            files: [{
                src: 'src/locale/**',
                dest: 'dist/i18n/',
                expand: true,
                flatten: true

            }]
        },
        
        examples: {
            files: [{
                src: 'dist/**/*',
                dest: 'examples/dist/',
                expand: true,
                flatten: true

            }]
        }
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
  grunt.loadNpmTasks('grunt-karma');
  
  
  grunt.registerTask('js', ['concat', 'uglify:dist']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('temp', ['ngtemplates']);
  grunt.registerTask('examples', ['copy:examples']);
  // Default task(s).
  grunt.registerTask('default', ['js', 'css', 'copy', 'temp', 'examples']);

};
