'use strict';

angular
  .module('tokeninterceptor.services', [])
  .factory('authService', ['$http', '$q', '$window', 'moment', 'store', 'jwtHelper',
      function($http, $q, $window, moment, store, jwtHelper) {
        let cache = {};
        // var isExpired = jwtHelper.isTokenExpired();
        return {
          getAuthorizationHeader() {
            if (cache.access_token && !jwtHelper.isTokenExpired(cache.access_token)) {

              return $q.when({ 'Authorization': 'Token ' + cache.access_token });

            } else {
              cache.access_token = store.get('token');
              // cache.expires_on = storage.getItem('expires_on');
              if (cache.access_token && !jwtHelper.isTokenExpired(cache.access_token)) {

                return $q.when({ 'Authorization': 'Token ' + cache.access_token });

              } else {
                return $http.post(localhost + 'api-token-refresh/',{'token': cache.access_token})
                .then(response => {
                  store.set('token', response.data.token);
                  cache.access_token = response.data.token;
                  console.log('access_token', cache.access_token);
                  return {'Authorization': 'Token ' + cache.access_token};

                },
                err => {
                  console.log('Error Refreshing token ',err);
                }
              );
              }
            }
          }
        };


      }]);
