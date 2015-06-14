/* global require */

var gulp = require('gulp');
var connect = require('gulp-connect');

var glob = './app/**/*.(!css)';

gulp.task('watch', function () {
	gulp.watch([glob], ['sass'], function(){
		gulp.src(glob).pipe(connect.reload());
	});
});
