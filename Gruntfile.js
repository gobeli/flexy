// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/screen.css': 'src/screen.scss',
          'demo/dist/css/screen.css': 'demo/src/sass/screen.scss'
        }
      }
    },
    
    autoprefixer:{
      build:{
        options: { 
          outputStyle: 'compressed'
        },
        files:{
          'dist/screen.css': 'dist/screen.css',
          'demo/dist/css/screen.css': 'demo/dist/css/screen.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/screen.min.css': 'dist/screen.css',
          'demo/dist/css/screen.min.css': 'demo/dist/css/screen.css'
        }
      }
    },
    
    watch: {
      css: {
        files: ['**/screen.scss'],
        tasks: ['sass','autoprefixer','cssmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer','cssmin','watch']);

};
