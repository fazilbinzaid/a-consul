'use strict';
angular.
  module('profileLogin').
  component('profileLogin', {
    templateUrl: 'profile-login/profile-login.template.html',
    controller: ['$location', '$scope', 'Authentication', 'authService', '$http',
      function ProfileLoginController($location, $scope, Authentication, authService, $http) {

        $scope.login = login;
        // activate();

        // function activate() {
        //   if (Authentication.isAuthenticated()) {
        //     $location.url('/profiles');
        //   }
        // }

        function login() {
          Authentication.login($scope.email, $scope.password);
          $scope.loggedin = true;

        }


      }]
  });
