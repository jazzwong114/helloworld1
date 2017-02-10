

(function() {
  'use strict';

  angular
    .module('helloworld')
    .controller('LoginResultController', LoginResultController);



  /** @ngInject */
  function LoginResultController($scope,$state,$http,$stateParams) {
    var vm = this;

      $http({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          data: $.param({
              loginID: $stateParams.id,
              password: $stateParams.psw
          }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function (data, status, headers, config) {
          // handle success things
          // console.log(data);

          vm.loginID=data.loginID;
          vm.password=data.password;
          vm.status='Login successfully';
      }).error(function (data, status, headers, config) {
          // handle error things
          vm.status='Login is failed';
      });


  }

})();

