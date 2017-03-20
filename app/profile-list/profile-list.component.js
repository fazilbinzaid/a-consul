'use strict';

angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['$http', '$scope', 'store', 'authService',
      function ProfileListController($http, $scope, store, authService) {
        var self = this;
        var token = store.get('token');
        // var data = Authentication.getAuthenticatedAccount();
        // self.orderProp = 'user';
        activate();

        function activate() {
          return authService.getAuthorizationHeader().then(authHeader => {
            return $http.get('http://127.0.0.1:8000/accounts/profiles/', {headers: authHeader})
            .then(function(response) {
              self.profiles = response.data;
              $scope.locfilter = function(profile) {
                return profile.location === 'Ernakulam' || profile.location === 'Kochi';
              };
            });

          })
        }

      }]
  });
