module.exports = function(grunt) {

  const mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/style.css': 'src/sass/style.scss',
        },
        options: {
          sourcemap: 'none',
          style: 'compressed',
          update: true
        }
      },
      src: {
        files: {
          'src/components/tile/tile.css': 'src/components/tile/tile.scss',
          'src/components/hero/hero.css': 'src/components/hero/hero.scss',
          'src/components/subnav/subnav.css': 'src/components/subnav/subnav.scss',
          'src/components/tile-sort/tile-sort.css': 'src/components/tile-sort/tile-sort.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'nested',
          update: true
        }
      },
    },

    concat: {
      basic: {
        files: {
          'dist/markup.html': [
          'src/components/subnav/subnav.html',
          'src/components/tile/tile.html',
          'src/components/tile-sort/tile-sort.html',
          ]
        }
      },
      full: {
        files: {
          'dist/global-code-snippet.html': [
          'src/components/subnav/subnav.html',
          'src/components/tile/tile.html',
          'src/components/tile-sort/tile-sort.html',
          'dist/tmp/dist/script.js',
          'dist/tmp/dist/style.css'
          ]
        },
        options: {
          separator: '\n',
        },
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/script.js': [
          'src/vendor/js/tinysort.min.js',
          'src/components/subnav/subnav.js',
          'src/components/hero/hero.js',
          'src/components/tile/tile.js',
          'src/components/tile-sort/tile-sort.js'
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
        files: ['src/components/**/*.html', 'src/components/**/*.js'],
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

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/'
        }]
      }
    },

    wrap: {
      script: {
        src: ['dist/script.js'],
        dest: 'dist/tmp/',
        options: {
          wrapper: ['<script>', '</script>']
        }
      },
      style: {
        src: ['dist/style.css'],
        dest: 'dist/tmp/',
        options: {
          wrapper: ['<style>', '</style>']
        }
      }
    },

    clean: {
      pre: ['dist'],
      post: ['dist/tmp']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean:pre', 'imagemin', 'concat:basic', 'uglify', 'sass', 'postcss', 'wrap', 'concat:full', 'clean:post']);
  grunt.registerTask('default', ['clean:pre', 'concat:basic', 'uglify', 'sass', 'postcss', 'watch']);
}
