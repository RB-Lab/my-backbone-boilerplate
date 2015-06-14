/* global module */
module.exports = function(config) {
	'use strict';
	config.set({
		port: 9876,
		frameworks: ['requirejs', 'mocha', 'chai', 'sinon'],
		
		files: [
			'app/js/test-main.js',
			'node_modules/bindpolyfill/index.js',

			// list these files but do not include them on page: 
			// require.js will include them later
			// - libs
			{pattern: 'app/bower_components/requirejs-text/text.js', included: false},
			{pattern: 'app/bower_components/jquery/dist/jquery.js', included: false},
			{pattern: 'app/bower_components/lodash/dist/lodash.js', included: false},
			{pattern: 'app/bower_components/backbone/backbone.js', included: false},
			{pattern: 'app/bower_components/moment/moment.js', included: false},
			{pattern: 'app/js/**/*', included: false}
		],

		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,

		browsers: ['PhantomJS'],
		urlRoot: '/'
	});
};