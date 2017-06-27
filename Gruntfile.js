module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/style.css': 'sass/style.scss',
        },
        options: {
          sourcemap: 'none',
          style: 'compressed',
          update: true
        }
      },
      src: {
        files: {
          'components/tile/tile.css': 'components/tile/tile.scss',
          'components/hero/hero.css': 'components/hero/hero.scss',
          'components/subnav/subnav.css': 'components/subnav/subnav.scss',
          'components/tile-sort/tile-sort.css': 'components/tile-sort/tile-sort.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'nested',
          update: true
        }
      },
    },

    concat: {
      dist: {
        files: {
          'dist/markup.html': [
          'components/subnav/subnav.html',
          'components/hero/hero.html',
          'components/tile/tile.html',
          'components/tile-sort/tile-sort.html'
          ]
        }
      },
    },

    uglify: {
      dist: {
        files: {
          'dist/script.js': [
          'vendor/js/tinysort.min.js',
          'vendor/js/jquery.tinysort.min.js',
          'components/subnav/subnav.js',
          'components/hero/hero.js',
          'components/tile/tile.js',
          'components/tile-sort/tile-sort.js'
          ]
        }
      },
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['components/**/*.html', 'components/**/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
        require('autoprefixer')({browsers: 'last 2 versions, > 1%, ie 8-11, Firefox ESR'})
        ]
      },
      dist: {
        src: 'dist/style.css'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss', 'watch']);
}
