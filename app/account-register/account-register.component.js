'use strict';

angular.
  module('accountRegister').
  component('accountRegister', {
    templateUrl: 'account-register/account-register.template.html',
    controller: ['$location', '$scope', 'Authentication',
        function RegisterController($location, $scope, Authentication) {

          function register(){
            Authentication.register($scope.email, $scope.password);
          }

          $scope.register = register;

        }]
  });
