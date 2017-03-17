'use strict';

angular
  .module('Navbar', [])
  .controller('NavbarController', ['$scope', 'Authentication', 'store',
      function NavbarController($scope, Authentication, store) {

        $scope.logout = logout;

        var token = store.get('token');
        if(token) {
          $scope.loggedin = true;
        }
        // $scope.loggedin = true;


        function logout() {
          Authentication.logout();
        }
      }]);
