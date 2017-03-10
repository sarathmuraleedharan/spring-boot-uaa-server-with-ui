(function() {
	'use strict';

	angular.module('sampleApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('users', {
			parent : 'app',
			url : '/users',
			data : {
				authorities : []
			},
			views : {
				'content@' : {
					templateUrl : 'app/users/users.html',
					controller : 'UsersController',
					controllerAs : 'vm'
				}
			}
		});
	}
})();
