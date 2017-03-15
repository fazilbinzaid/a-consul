'use strict';

angular
  .module('Navbar', [])
  .controller('NavbarController', ['$scope', 'Authentication',
      function NavbarController($scope, Authentication) {

        $scope.logout = logout;

        function logout() {
          Authentication.logout();
        }
      }]);
