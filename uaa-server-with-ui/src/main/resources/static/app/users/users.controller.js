/**
 * Created by Sarath Muraleedharan on 25-08-2016.
 */
(function() {
	'use strict';
	
	
	angular.module('sampleApp').controller('UsersController', UsersController);

	UsersController.$inject = [ '$scope', '$state','$http' ];

	function UsersController($scope, $state,$http) {
		var vm = this;
		var init = function() {
			$http.get('/users/').success(function(res) {
				vm.users = res;
			}).error(function(error) {
			});
		};
		init();

		vm.saveUser = function() {
			$http.post('/users/', $scope.appUser).success(
					function(res) {
						console.log(res);
						vm.appUser = null;
						init();
					}).error(function(error) {
			});
		};
		vm.deleteUser = function(appUser) {
			$http.delete('/users/'+appUser.id).success(
					function(res) {
						console.log(res);
						vm.appUser = null;
						init();
					}).error(function(error) {
			});
		};
		vm.editUser = function(appUser) {
			vm.appUser = appUser;
		};

	}
	
	
})();
