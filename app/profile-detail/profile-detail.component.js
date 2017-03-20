'use strict';

angular.
  module('profileDetail').
  component('profileDetail', {
    templateUrl: 'profile-detail/template.html',
    controller: ['$http', '$routeParams', 'authService', '$scope',
      function ProfileDetailController($http, $routeParams, authService, $scope) {
        var self = this;

        activate();

        function activate() {
          return authService.getAuthorizationHeader().then(authHeader => {
            $http.get('http://127.0.0.1:8000/accounts/profiles/' + $routeParams.profileId + '/', {headers: authHeader})
            .then(function(response) {
              self.profile = response.data;
            });
          });
        }

        $scope.modalShown = false;

        $scope.openModal = function() {
          $scope.modalShown = !$scope.modalShown;
        }

      }]
  });
