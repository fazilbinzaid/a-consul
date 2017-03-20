'use strict';

angular
  .module('Navbar', [])
  .controller('NavbarController', ['$scope', 'Authentication', 'store', 'jwtHelper',
      function NavbarController($scope, Authentication, store, jwtHelper) {

        $scope.logout = logout;

        var token = store.get('token');
        if(token && !jwtHelper.isTokenExpired(token)) {
          $scope.loggedin = true;
        } else {
          $scope.loggedin = false;
        }
        // $scope.loggedin = true;


        function logout() {
          Authentication.logout();
        }
      }]);
