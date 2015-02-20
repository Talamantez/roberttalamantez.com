module.exports = function(grunt) {

  grunt.initConfig({
    clean: 
      ["dist/", "src/css/*"],
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      dist: {
        options:{
              loadPath: require('node-bourbon').includePaths,
              loadPath: require('node-neat').includePaths,
              loadPath: require('node-refills').includePaths
            },
        files: {
          'public/css/style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      options:{
        livereload: true,
      },
      sass: {
        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      } 
    },
    uglify: {
       bower: {
        options: {
          mangle: true,
          compress: true
        },
          files: {
            'public/js/jquery.min.js': 'bower_components/jquery/dist/jquery.js'
          } 
      }
    }
  });

// load all tasks
  require('load-grunt-tasks')(grunt);

// empty the dist folder
  grunt.registerTask('clear-dist', 'clean');

// generate ccs file from sass
  grunt.registerTask('sassy', ['sass']);

// default task
  grunt.registerTask('default', ['jshint','clear-dist','sassy','uglify','test']);

  grunt.registerTask('test', 'run tests', function () {
    var done = this.async();
    require('child_process').exec('npm test', function (err, stdout) {
      grunt.log.write(stdout);
      done(err);
    });
  });
};
