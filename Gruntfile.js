module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/style.css': 'sass/style.scss',
          'components/tile/tile.css': 'components/tile/tile.scss',
          'components/hero/hero.css': 'components/hero/hero.scss',
          'components/subnav/subnav.css': 'components/subnav/subnav.scss'
        }
      },
      options: {
        sourcemap: 'none'
      }
    },

    concat: {
      dist: {
        src: ['components/subnav/subnav.js', 'components/hero/hero.js', 'components/tile/tile.js'],
        dest: 'dist/script.js',
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
        files: 'components/**/*.js',
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
