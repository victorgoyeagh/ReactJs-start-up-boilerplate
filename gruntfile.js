module.exports = function(grunt) {

    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config.js");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webpack: {
            options: webpackConfig,
            "build-dev": {
                devtool: "sourcemap",
                debug: true
            }
        },
        uglify: {
            dist: {
                src: "assets/js/transpiled/app.es6c.js",
                dest: "dist/assets/js/app.min.js"
            }
        },
        cssmin: {
            dist: {
                src: ["assets/css/custom/main.css"],
                dest: "dist/assets/css/main.min.css"
            }
        },
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/css/custom/main.css': 'assets/sass/modules.scss'
                }
            }
        },
        watch: {
            js: {
                files: ['assets/**/*.js', 'assets/**/*.jsx'],
                tasks: ['webpack', 'uglify', 'clean'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['assets/**/*.scss', 'assets/css/**/*.css'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                }
            }
        },
        copy: {
            jquery: {
                files: [{
                    cwd: 'assets/frameworks/jquery/dist/',
                    src: ['jquery.min.js'],
                    dest: 'dist/assets/js/', //http2
                    expand: true,
                    filter: 'isFile'
                }]
            },
            jqueryui: {
                files: [{
                    cwd: 'assets/frameworks/jqueryui/',
                    src: ['jquery-ui.min.js'],
                    dest: 'dist/assets/js/',
                    expand: true,
                    filter: 'isFile'
                }]
            },
            tether: {
                files: [{
                    cwd: 'assets/frameworks/bootstrap-4.0.0-alpha.4/dist/js/',
                    src: ['tether.min.js'],
                    dest: 'dist/assets/js/',
                    expand: true,
                    filter: 'isFile'
                }]
            },
            bootstrapjs: {
                files: [{
                    cwd: 'assets/frameworks/bootstrap-4.0.0-alpha.4/dist/js/',
                    src: ['bootstrap.min.js'],
                    dest: 'dist/assets/js/',
                    expand: true,
                    filter: 'isFile'
                }]
            },
            bootstrapcss: {
                files: [{
                    cwd: 'assets/frameworks/bootstrap-4.0.0-alpha.4/dist/css/',
                    src: ['bootstrap.min.css', 'responsive.css'],
                    dest: 'dist/assets/css/',
                    expand: true,
                    filter: 'isFile'
                }]
            }
        },
        clean: {
            dist: {
                src: ['assets/js/transpiled']
            }
        }
    });

    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask("default", ["webpack", "uglify", "sass", "cssmin", "copy", "clean", "watch"]);
    grunt.registerTask("dist", ["webpack", "uglify", "sass", "cssmin", "copy", "clean", "watch"]);

    grunt.registerTask("css", ['sass', 'cssmin', "watch:css"]);
    grunt.registerTask("tupac", ["webpack"]);
}