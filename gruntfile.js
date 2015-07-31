module.exports = function (grunt) {
  'use strict';
  // Configurations
  grunt.initConfig({
    watch: {
      css: {
        files: ['scss/*.scss','scss/**/*.scss','images/icon/*'],
        tasks: ['sass','css_sprite', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['./gruntfile.js'],
        options: {
          reload: true
        }
      }
    },
    sass: {
      options:{
        sourcemap: 'file',
        style: 'compressed'
      },
      files: {
        expand: true,
        cwd: 'scss/',
        src: [
        '**/*.scss'
        ],
        dest: 'assets/css',
        ext: '.css',
        extDot: 'last'
      }
    },
    autoprefixer: {
      options: {
        map: true,
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },
      files: {
            expand: true,
            cwd: 'assets/css/',
            src: [
                '**/*.css'
            ],
            dest: 'assets/css',
            ext: '.css',
            extDot: 'last'
        }
    },
    css_sprite: {
      options: {
        'cssPath': '../../images/',
        'processor': 'scss',
        'orientation': 'vertical',
        'margin': 10
      },
      sprite: {
        options: {
          'style': 'scss/theme/_sprite.scss'
        },
        src: ['images/icon/*'],
        dest: 'images/sprite',
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
          'assets/css/*.css',
          '*.html',
          'view/*.html',
          'js/**/*.js'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'http://localhost:8080/',
          open: false
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('css-sprite');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};