'use strict';
angular.
  module('profileLogin').
  component('profileLogin', {
    templateUrl: 'profile-login/profile-login.template.html',
    controller: ['$location', '$scope', 'Authentication',
      function ProfileLoginController($location, $scope, Authentication) {

        $scope.login = login;
        activate();

        function activate() {
          if (Authentication.isAuthenticated()) {
            $location.url('/profiles');
          }
        }

        function login() {
          Authentication.login($scope.email, $scope.password);
        }
      }]
  });
