'use strict';

angular.
  module('profileLogin', []).
  component('profileLogin', {
    restrict: 'E',
    templateUrl: 'profile-login/profile-login.template.html',
    controller: ProfileLoginController
  });

  function ProfileLoginController($location, $scope, Authentication, jwtHelper, $http, store) {

    'ngInject';

    $scope.login = login;
    var token = store.get('token');
    activate();

    function activate() {
      if (token && !jwtHelper.isTokenExpired(token)) {
        $location.url('/profiles');
      }
    }

    function login() {
      Authentication.login($scope.email, $scope.password);
      $scope.loggedin = true;

    }

  }
