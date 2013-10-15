module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dusthtml: {
      index: {
        src: "index.dust",
        dest:"../index.html",
        options: {
          context: "data/index.json",
          whitespace: true
        }
      },
      code_of_conduct: {
        src: "code-of-conduct.dust",
        dest:"../code-of-conduct.html",
        options: {
          context: "data/index.json",
          whitespace: true
        }
      },
      schedule: {
        src: "schedule.dust",
        dest:"../schedule.html",
        options: {
          context: "data/schedule.json",
          whitespace: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-dust-html');
  grunt.registerTask('default', ['dusthtml']);
};
