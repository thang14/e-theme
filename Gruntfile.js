module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      target: {
        files: [
          'dist/js/app.js' => ['js/**/*.js']
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('css', ['cssmin']);
  
  // Default task(s).
  grunt.registerTask('default', ['js', 'css']);

};
