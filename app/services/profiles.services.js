'use strict';

angular.
  module('profiles.services', [])
  .factory('Profiles', ['$http',
      function Profiles($http) {

        var Profiles = {
          create: create,
          get: get
        };
        return Profiles;

        function create(content) {
          return $http.post('http://127.0.0.1:8000/accounts/profiles/', {
            data: content
          });
        }

        function get() {
          return $http.get('http://127.0.0.1:8000/accounts/profiles/');
        }

      }]);
