'use strict';

angular.
  module('profiles.services', [])
  .factory('Profiles', ['$http',
      function Profiles($http) {

        var Profiles = {
          create: create,
          get: get,
          detail: detail,
          destroy: destroy
        };
        return Profiles;

        function create(content, config) {
          if (!config) {
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
          }
          return $http.post(localhost + 'accounts/profiles/', content, config);
        }

        function get(headers) {
          return $http.get(localhost + 'accounts/profiles/', {headers: headers});
        }

        function detail(id, headers) {
          return $http.get(localhost + 'accounts/profiles/' + id + '/', {headers: headers});
        }

        function destroy(id, headers) {
          return $http.delete(localhost + 'accounts/profiles/' + id + '/', {headers: headers});
        }

      }]);
