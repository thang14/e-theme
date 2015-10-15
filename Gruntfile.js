module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      scriptCore: {
        files: [
          'dist/js/core.js' => [
            'bower_components/jquery/jquery',
            'bower_components/angular/angular',
            'bower_components/angular-route/angular-route',
          ]
        ]
      },
      scriptApp: {
        files: [
          'dist/js/app.js' => ['js/**.js']
        ]
      }
    },
    ngtemplates:  {
      web:{
        src:'web/**/*.html',
        options:{
          usemin: 'dist/js/templates.js' // <~~ This came from the <!-- build:js --> block
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('temp', ['ngtemplates']);
  
  // Default task(s).
  grunt.registerTask('default', ['js', 'css']);

};
