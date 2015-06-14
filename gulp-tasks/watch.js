/* global require */

var gulp = require('gulp');
var connect = require('gulp-connect');

var glob = './app/**/*.*';

gulp.task('watch', function () {
	gulp.watch([glob], function(){
		gulp.src(glob).pipe(connect.reload());
	});
});