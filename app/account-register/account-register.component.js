'use strict';

angular.
  module('accountRegister', []).
  component('accountRegister', {
    templateUrl: 'account-register/account-register.template.html',
    controller: RegisterController
  });

  function RegisterController($location, $scope, Authentication) {

    'ngInject';

    function register(){
      Authentication.register($scope.email, $scope.password);
    }

    $scope.register = register;

}
