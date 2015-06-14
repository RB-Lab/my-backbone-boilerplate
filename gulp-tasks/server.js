/* global require */

var gulp = require('gulp');
var connect = require('gulp-connect');

var settings = {
	root: 'app',
	host: 'localhost',
	port: 8080,
	livereload: true
};

gulp.task('server', function() {
	connect.server(settings);
});
