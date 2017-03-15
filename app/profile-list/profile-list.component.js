'use strict';

angular.
  module('profileList').
  component('profileList', {
    templateUrl: 'profile-list/profile-list.template.html',
    controller: ['$http', '$scope', '$cookies', 'Authentication',
      function ProfileListController($http, $scope, $cookies, Authentication) {
        var self = this;
        var data = Authentication.getAuthenticatedAccount();
        // self.orderProp = 'user';

        $http({
          method: 'GET',
          url: 'http://127.0.0.1:8000/accounts/profiles/',
          // data: {email:data.email, password:data.password},
          headers: {'Content-Type': 'application/json',
                    // 'email':data.email, 'password':data.password
                    }
        }).then(function(response) {
          self.profiles = response.data;

        $scope.locfilter = function(profile) {
          return profile.location === 'Ernakulam' || profile.location === 'Kochi';
        };

        });
      }]
  });
