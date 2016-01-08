module.exports = function(grunt) {

	// Loads all the relevant grunt plugins for use in the project.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Initialises grunt.
	grunt.initConfig({
		uglify: {
			options: {
				// wrap: "Build",
				// mangle: false,
				// compress: false, // true or false or {}
				// beautify: true, // true or false or {}
				// preserveComments: 'all', // true or 'all' or 'some'
				sourceMap : true
				// banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			my_target: {
				files: {

					'../js/framework.js': ['../_dev/js/framework/*.js'],
					'../js/getbuild.js': ['../_dev/js/getbuild/*.js'],
					'../js/libs.js': ['../_dev/js/libs/*.js'],

					// '../js/whybuild/js/whybuild.js': ['../_dev/js/whybuild/*.js'],
					// '../js/support/js/support.js': ['../_dev/js/support/*.js'],
					// '../js/page-content.js': ['../_dev/js/page-content/*.js'],
					// '../js/header.js': ['../_dev/js/components/header.js'],
					// '../js/utilities.js': ['../_dev/js/utilities/*.js'],
					// '../js/build-modal.js': ['../_dev/js/modal/*.js'],
					
					'../js/home.js': ['../_dev/js/home/*.js'],
					'../js/login.js': ['../_dev/js/login/*.js'],
					'../js/forgotpassword.js': ['../_dev/js/forgotpassword/*.js'],
					'../js/contact.js': ['../_dev/js/contact/*.js'],
					'../js/induction-1.js': ['../_dev/js/induction-1/*.js'],
					'../js/induction-2.js': ['../_dev/js/induction-2/*.js'],
					'../js/induction-1-pioneers.js': ['../_dev/js/induction-1-pioneers/*.js'],
					'../js/induction-2-pioneers.js': ['../_dev/js/induction-2-pioneers/*.js'],
					'../js/induction-1-stripe.js': ['../_dev/js/induction-1-stripe/*.js'],
					'../js/induction-2-stripe.js': ['../_dev/js/induction-2-stripe/*.js']

				} //files
			} //mytarget
			// },
		}, //uglify
		compass: {
			dev: {
				options: {
					config: "config.rb"
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true},
			scripts: {
				files: [
					
					'../_dev/js/*.js',
					'../_dev/js/framework/*.js',
					'../_dev/js/getbuild/*.js',

					// '../_dev/js/header/*.js',
					// '../_dev/js/modal/*.js',
					// '../_dev/js/page-content/*.js',
					// '../_dev/js/support/*.js',
					// '../_dev/js/utilities/*.js',
					// '../_dev/js/components/*.js',
					
					'../_dev/js/home/*.js',
					'../_dev/js/login/*.js',
					'../_dev/js/forgotpassword/*.js',
					'../_dev/js/contact/*.js',
					'../_dev/js/induction-1/*.js',
					'../_dev/js/induction-2/*.js',
					'../_dev/js/induction-1-pioneers/*.js',
					'../_dev/js/induction-2-pioneers/*.js',
					'../_dev/js/induction-1-stripe/*.js',
					'../_dev/js/induction-2-stripe/*.js'
					],
				tasks: ["uglify"]
			}, //scripts
			html: {
				files: [
					'../*.html',
					'../styleguide/*.html',
					'../whybuild/*.html',
					'../support/*.html',
					'../contact/*.html',
					'../tests/*.html',
					],
				// tasks: ["uglify:markup"]
			},
			sass: {
				files: ["../_dev/sass/*.scss"],
				tasks: ["compass:dev"]
			}
		}
	}); // initConfig
	grunt.registerTask("default", "watch"); // Registers a default task to run with grunt

}; // exports