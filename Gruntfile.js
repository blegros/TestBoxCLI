module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            lib: {
                src: ['lib/**/*.js', 'index.js']
            },
            test: {
                src: ['test/**/*.js']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    // Tasks
    grunt.registerTask('default', ['jshint:lib', 'jshint:test', 'mochaTest']);
};