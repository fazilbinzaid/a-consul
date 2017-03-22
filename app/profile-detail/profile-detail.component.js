'use strict';

angular.
  module('profileDetail').
  component('profileDetail', {
    templateUrl: 'profile-detail/profile-detail.template.html',
    controller: ['$routeParams', 'authService', '$scope', 'Profiles', '$location',
      function ProfileDetailController($routeParams, authService, $scope, Profiles, $location) {
        var self = this;
        var profile_id = $routeParams.profileId;

        activate();

        function activate() {

          return authService.getAuthorizationHeader().then(authHeader => {
            // $http.get(localhost + 'accounts/profiles/' + $routeParams.profileId + '/', {headers: authHeader})
            Profiles.detail(profile_id, authHeader)
            .then(function(response) {
              self.profile = response.data;
            });
          });
        }

        $scope.delete = function(id) {
          return authService.getAuthorizationHeader().then(authHeader => {
            Profiles.destroy(id, authHeader)
            .then(deleteSuccessFn, deleteErrorFn);

            function deleteSuccessFn() {
              $location.url('/deleted_page');
            }

            function deleteErrorFn() {
              $location.url('/404_page');
            }
          });
        };

      }]
  });
