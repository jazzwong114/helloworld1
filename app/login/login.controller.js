(function() {
  'use strict';

  angular
    .module('helloworld')
    .controller('LoginController', LoginController);



  /** @ngInject */
  function LoginController($log,$scope,$state,$http) {
    var vm = this;

    //$log.info("test2");

	vm.LoginID='Login ID';
	vm.Password='Password';
	vm.send = send;

	function send(stateName) {	
	    //$scope.changeState = $state.go(stateName);

	    $state.go(stateName, {
		    id: vm.LoginID,                
		    psw: vm.Password
		});
	}
  }

})();
