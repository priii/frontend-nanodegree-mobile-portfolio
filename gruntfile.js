module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // minify js files
        uglify: {
          build: {
            src: 'views/js/main.js',
            dest: 'dist/views/js/main.min.js'
          }
        },
        // minifying the css files
        cssmin: {
          dist: {
            files: [{
              expand: true,
              cwd:'css/',
              src: ['*.css','!*.min.css'],
              dest: 'dist/css',
              ext: '.min.css'
            }]
          }
        },
        // minifying the images
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'views/images/',
                    src: ['*.{png,jpg}'],
                    dest: 'dist/views/images/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['imagemin','cssmin','uglify']);

};
