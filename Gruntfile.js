module.exports = function(grunt) {
	'use strict';
	grunt
			.initConfig({

				typescript : {
					base : {
						src : [ 'WebContent/script/src/ts/*.ts' ],
						// dest : 'script/js/<%= pkg.name %>.js',
						dest : 'WebContent/script/dest/cat.js',
						options : {
							sourceMap : true,
						}
					}
				},

				pkg : grunt.file.readJSON('package.json'),

				concat : {
					dist : {
						src : [ 'WebContent/script/src/js/*.js',
								'WebContent/script/dest/cat.js', ],
						dest : 'WebContent/script/dest/main.js'
					}
				},
				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'WebContent/script/dest/main.js',
						dest : 'WebContent/script/dest/main.min.js'
					},
				},
				watch : {
					files : [ 'WebContent/script/src/ts/*.ts',
							'WebContent/script/src/js/*.js' ],
					tasks : [ 'concat', 'uglify' ]
				},
				// 不要なファイルを削除する
				clean : {
					// releaseから不要なファイルを削除する
					deleteReleaseFile : {
						src : [ 'WebContent/script/dest/cat.js' ],
					}
				},

			});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('build', [ 'typescript', 'concat', 'uglify', 'clean' ]);

};