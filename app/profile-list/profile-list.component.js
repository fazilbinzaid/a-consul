'use strict';

angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['$http', '$scope',
      function ProfileListController($http, $scope) {
        var self = this;
        // self.orderProp = 'user';

        $http.get('http://127.0.0.1:8000/accounts/profiles/').then(function(response) {
          self.profiles = response.data;

        $scope.locfilter = function(profile) {
          return profile.location === 'Ernakulam' || profile.location === 'Kochi';
        };

        });
      }]
  });
