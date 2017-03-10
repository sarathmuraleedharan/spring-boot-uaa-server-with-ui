(function() {
	'use strict';

	angular.module(
			'sampleApp',
			[ 'ngStorage', 'ngResource', 'ngCookies', 'ngAria', 'ngFileUpload',
					'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ui.router',
					'infinite-scroll', 'angular-loading-bar' ]).run(run);
	function run() {
	}
})();
