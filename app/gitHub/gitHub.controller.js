(function() {
  'use strict';

  angular
    .module('helloworld')
    .controller('gitHubController', gitHubController);



  /** @ngInject */
  function gitHubController($scope,$state,$http) {
    var vm = this;



    $http.get('https://api.github.com/users/jazzwong114').success(function(data) {
        $scope.user = data;
        console.log(data);

      }).error(function() {

        console.log('error in get request');
      });





  }

})();
