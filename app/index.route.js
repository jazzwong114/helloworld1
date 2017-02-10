(function() {
  'use strict';

  angular
    .module('helloworld')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })

      .state('loginResult', {
        url: '/loginResult',
        templateUrl: 'app/loginResult/loginResult.html',
        controller: 'LoginResultController',
        controllerAs: 'loginResult',
        params: {
          id:'defaultID',psw:'defaultPsw'
        }
      })

      .state('gitHubPage', {
        url: '/gitHubPage',
        templateUrl: 'app/gitHub/gitHub.html',
        controller: 'gitHubController',
        controllerAs: 'gitHub'
      })

      .state('clientAcc', {
        url: '/ClientAcc',
        templateUrl: 'app/ClientAcc/ClientAcc.html',
        controller: 'ClientAccController',
        controllerAs: 'ClientAcc'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $urlRouterProvider.otherwise('/');
  }

})();