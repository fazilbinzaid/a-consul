'use strict';

angular.
  module('profileList', []).
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ProfileListController
  });

  function ProfileListController($http, $scope, store, authService, Profiles) {

    'ngInject';

    var self = this;
    var token = store.get('token');
    // var data = Authentication.getAuthenticatedAccount();
    // self.orderProp = 'user';
    activate();

    function activate() {
      return authService.getAuthorizationHeader().then(authHeader => {
        // return $http.get(localhost + 'accounts/profiles/', {headers: authHeader})
        Profiles.get(authHeader)
        .then(function(response) {
          self.profiles = response.data;
          $scope.locfilter = function(profile) {
            return profile.location === 'Ernakulam' || profile.location === 'Kochi';
          };
        });

      })
    }
}
