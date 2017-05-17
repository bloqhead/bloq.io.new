/*global module:false*/
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass / Scss
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'scss',
                    src: [
                        '**/*.scss'
                    ],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },

        // CSSMin
        cssmin: {
            dist: {
                files: {
                    'public/css/main.min.css': [
                        'public/css/main.css'
                    ]
                }
            }
        },

        // Concatenation
        concat: {
            dist: {
                files: {
                    'public/js/vendor.js': [
                        'public/js/vendor/**/*.js',
                        '!public/js/main.js',
                        '!public/js/main.min.js'
                    ]
                },
                options: {
                    separator: ';'
                }
            }
        },

        // Uglify
        uglify: {
            dist: {
                files: {
                    'public/js/main.min.js': [
                        'public/js/main.js',
                        '!public/js/main.min.js'
                    ]
                }
            }
        },

        // Browsersync
        browserSync: {
            dist: {
                files: {
                    src: [
                        'public/js/**/*.js',
                        'scss/**/*.scss',
                        '*.html'
                    ]
                },
                options: {
                    port: '<%= pkg.browsersync_port %>',
                    open: 'ui',
                    watchTask: true,
                    injectChanges: true
                }
            }
        },

        // Watch
        watch: {
            scripts: {
                files: [
                    'public/js/**/*.js',
                    '!public/js/main.js',
                    '!public/js/main.min.js'
                ],
                tasks: [
                    'concat'
                ]
            },
            styles: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task
    grunt.registerTask('default', [ 'newer:sass', 'newer:concat' ]);

    // When you want BrowserSync
    grunt.registerTask('dev', [ 'browserSync', 'watch' ]);

    // Build for distribution (prior to launch)
    grunt.registerTask('build', [ 'default', 'uglify', 'cssmin' ]);
};
