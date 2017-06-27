module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/style.css': 'sass/style.scss',
          'components/tile/tile.css': 'components/tile/tile.scss',
          'components/hero/hero.css': 'components/hero/hero.scss',
          'components/subnav/subnav.css': 'components/subnav/subnav.scss',
          'components/tile-sort/tile-sort.css': 'components/tile-sort/tile-sort.scss'
        }
      },
      options: {
        sourcemap: 'none'
      }
    },

    concat: {
      dist: {
        files: {
          'dist/script.js': [
          'vendor/js/tinysort.min.js',
          'vendor/js/jquery.tinysort.min.js',
          'components/subnav/subnav.js',
          'components/hero/hero.js',
          'components/tile/tile.js',
          'components/tile-sort/tile-sort.js'
          ],
          'dist/markup.html': [
          'components/subnav/subnav.html',
          'components/hero/hero.html',
          'components/tile/tile.html',
          'components/tile-sort/tile-sort.html'
          ]
        }
      },
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['components/**/*.html', 'components/**/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'sass', 'watch']);
}
