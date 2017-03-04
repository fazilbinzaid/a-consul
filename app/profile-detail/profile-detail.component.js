'use strict';

angular.
  module('profileDetail').
  component('profileDetail', {
    templateUrl: 'profile-detail/profile-detail.template.html',
    controller: ['$http', '$routeParams',
      function ProfileDetailController($http, $routeParams) {
        var self = this;

        $http.get('http://127.0.0.1:8000/accounts/profiles/' + $routeParams.profileId + '/' ).then(function(response) {
          self.profile = response.data;
        });
      }]
  });
