module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				files: {
					'style.css' : 'style.less'
				}
			}
		},
		watch: {
			less: {
				files: 'style.less',
				tasks: ['less:compile']
			}
		}
	});

	//load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//register tasks
	grunt.registerTask('default', ['watch']);
	
};