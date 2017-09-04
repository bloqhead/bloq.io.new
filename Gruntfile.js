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
					cwd: 'src/scss',
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

		// PostCSS
		postcss: {
			options: {
				map: true,
				processors: [
					require('pixrem')(),
					require('autoprefixer')({ browsers: 'last 2 versions' })
				]
			},
			dist: {
				src: 'public/css/*.css'
			}
		},

		// Babel
		babel: {
			options: {
				sourceMap: true,
				babelrc: true,
				comments: true,
				presets: [ 'es2015' ]
			},
			dist: {
				files: [{
					expand: false,
					src: [ 'src/js/app.js' ],
					dest: 'public/js/app.js',
					ext: '.js'
				}]
			}
		},

		// Concatenation
		concat: {
			dist: {
				files: {
					'public/js/vendor.js': [
						'src/js/vendor/**/*.js'
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
					'public/js/app.min.js': [
						'public/js/app.js',
						'!public/js/app.min.js'
					]
				}
			}
		},

		// Browsersync
		browserSync: {
			dist: {
				files: {
					src: [
						'src/js/**/*.js',
						'src/scss/**/*.scss',
						'*.html'
					]
				},
				options: {
					port: '3001',
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
					'src/js/**/*.js',
					// '!src/js/app.js',
					'!src/js/app.min.js'
				],
				tasks: [
					'babel',
					'concat'
				]
			},
			styles: {
				files: [
					'src/scss/**/*.scss'
				],
				tasks: [
					'sass',
					'postcss'
				]
			},
			options: {
				nospawn: true,
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Default task
	grunt.registerTask('default', [ 'newer:sass', 'newer:postcss', 'newer:babel', 'newer:concat' ]);

	// When you want BrowserSync
	grunt.registerTask('dev', [ 'browserSync', 'watch' ]);

	// Build for distribution (prior to launch)
	grunt.registerTask('build', [ 'default', 'uglify', 'cssmin' ]);
};
