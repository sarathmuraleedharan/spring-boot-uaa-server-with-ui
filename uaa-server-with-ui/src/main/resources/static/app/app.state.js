(function() {
	'use strict';

	angular.module('sampleApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider', '$httpProvider',
			'$urlRouterProvider' ];

	var APP_URL_PREFIX = '/uaa';
	apiInterceptor.$inject = [ '$q' ];
	function apiInterceptor($q) {
		return {
			request : function(config) {
				var url = config.url;

				// ignore template requests
				if (url.substr(url.length - 5) == '.html'
						|| url.substr(url.length - 4) == '.ico') {
					return config || $q.when(config);
				} else {
					if (url.includes(".")) {
						return config || $q.when(config);
					}
				}

				config.url = APP_URL_PREFIX + config.url;
				console.log(config);
				return config || $q.when(config);
			}
		}
	}

	function stateConfig($stateProvider, $httpProvider, $urlRouterProvider) {
		$httpProvider.interceptors.push(apiInterceptor);
		$stateProvider.state('app', {
			abstract : true,
			views : {
				'navbar@' : {
					templateUrl : 'app/layouts/navbar/navbar.html',
					controller : 'NavbarController',
					controllerAs : 'vm'
				}
			}
		});

		$urlRouterProvider.otherwise('/');
	}
})();
