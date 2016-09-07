module.exports = function(grunt) {

	// Loads all the relevant grunt plugins for use in the project.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Initialises grunt.
	grunt.initConfig({
		
		uglify: {

			common: {

				options: {
					// mangle: true,
					// compress: false, // true or false or {}
					// beautify: true, // true or false or {}
					// preserveComments: 'all', // true or 'all' or 'some'
					sourceMap : true
				},

				files: {
					'../js/framework.js': ['../_dev/js/framework/*.js'],
					'../js/getbuild.js': ['../_dev/js/getbuild/*.js'],
					'../js/libs.js': ['../_dev/js/libs/*.js'],
				}

			},

			pages: {

				options: {
					// mangle: true,
					// compress: false, // true or false or {}
					// beautify: true, // true or false or {}
					// preserveComments: 'all', // true or 'all' or 'some'
					sourceMap : true
				},

				files: {
					'../js/home.js': ['../_dev/js/home/*.js'],
					'../js/login.js': ['../_dev/js/login/*.js'],
					'../js/forgotpassword.js': ['../_dev/js/forgotpassword/*.js'],
					'../js/contact.js': ['../_dev/js/contact/*.js'],
					'../js/induction-1.js': ['../_dev/js/induction-1/*.js'],
					'../js/induction-2.js': ['../_dev/js/induction-2/*.js'],
				}
				
			},
		}, 

		compass: {
			dev: {
				options: {
					config: "config.rb"
				}
			}
		},

		watch: {

			options: { livereload: true},

			scripts: {
				files: [
					
					'../_dev/js/*.js',
					'../_dev/js/framework/*.js',
					'../_dev/js/getbuild/*.js',
					
					],
				tasks: ["uglify:common"]
			},

			pages: {
				files: [
					'../_dev/js/home/*.js',
					'../_dev/js/login/*.js',
					'../_dev/js/forgotpassword/*.js',
					'../_dev/js/contact/*.js',
					'../_dev/js/induction-1/*.js',
					'../_dev/js/induction-2/*.js',
					],
				tasks: ["uglify:pages"]
			},

			sass: {
				files: ["../_dev/sass/*.scss"],
				tasks: ["compass:dev"]
			}
		}
	}); // initConfig
	grunt.registerTask("default", "watch");

}; // exports