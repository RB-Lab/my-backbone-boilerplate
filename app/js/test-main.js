/* global window, require */
var tests = Object.keys(window.__karma__.files).filter(function (file) {
	return /\.test\.js$/.test(file);
});

require.config({
	baseUrl: '/base/app/js',
	paths: {
		text: '../bower_components/requirejs-text/text',
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/lodash/dist/lodash'
	},

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});
