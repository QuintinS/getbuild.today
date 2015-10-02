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
				mangle: false,
				compress: false, // true or false or {}
				beautify: true, // true or false or {}
				preserveComments: 'all', // true or 'all' or 'some'
				// sourceMap : true
				// banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			my_target: {
				files: {

					'../js/contact/js/contact.js': ['../_dev/js/home/*.js'],
					'../js/whybuild/js/whybuild.js': ['../_dev/js/whybuild/*.js'],
					'../js/support/js/support.js': ['../_dev/js/support/*.js'],
					
					'../js/home.js': ['../_dev/js/home/*.js'],
					'../js/getbuild.js': ['../_dev/js/getbuild/*.js'],
					'../js/contact.js': ['../_dev/js/contact/*.js'],
					'../js/page-content.js': ['../_dev/js/page-content/*.js'],
					'../js/header.js': ['../_dev/js/components/header.js'],
					'../js/utilities.js': ['../_dev/js/utilities/*.js'],
					'../js/build-modal.js': ['../_dev/js/modal/*.js'],
					'../js/induction-1.js': ['../_dev/js/induction-1/*.js'],
					'../js/induction-2.js': ['../_dev/js/induction-2/*.js'],

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
					'../_dev/js/header/*.js',
					'../_dev/js/getbuild/*.js',
					'../_dev/js/home/*.js',
					'../_dev/js/contact/*.js',
					'../_dev/js/modal/*.js',
					'../_dev/js/page-content/*.js',
					'../_dev/js/support/*.js',
					'../_dev/js/induction-1/*.js',
					'../_dev/js/induction-2/*.js',
					'../_dev/js/utilities/*.js',
					'../_dev/js/components/*.js',
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

} // exports