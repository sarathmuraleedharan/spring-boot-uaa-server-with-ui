(function() {
	'use strict';

	angular.module('sampleApp')
			.controller('NavbarController', NavbarController);

	NavbarController.$inject = [ '$state' ];

	function NavbarController($state) {
		var vm = this;
	}
})();
