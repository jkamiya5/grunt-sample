module.exports = function(grunt) {
	'use strict';
	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),

				concat : {
					dist : {
						src : [ 'js/src/test1.js', 'js/src/test2.js',
								'js/src/test3.js', 'js/src/test4.js', ],
						dest : 'WebContent/scripts/<%= pkg.name %>.js'
					}
				},

				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'WebContent/scripts/<%= pkg.name %>.js',
						dest : 'WebContent/scripts/<%= pkg.name %>.min.js'
					}
				},
				watch : {
					files : [ 'js/src/*.js' ],
					tasks : [ 'concat', 'uglify' ]
				}
			});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', [ 'concat', 'uglify' ]);

};