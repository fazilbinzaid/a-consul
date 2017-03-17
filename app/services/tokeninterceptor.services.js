'use strict';

angular
  .module('tokeninterceptor.services', [])
  .factory('authService', ['$http', '$q', '$window', 'moment', 'store',
      function($http, $q, $window, moment, store) {
        const storage = $window.localStorage;
        let cacheToken = {};
        return {
          getAuthorizationHeader() {
            if (cacheToken.access_token && cacheToken.expires_on > moment(new Date().getTime()).unix()) {

              return $q.when({ 'Authorization': 'Token ' + cacheToken.access_token });

            } else {
              cacheToken.access_token = storage.getItem('access_token');
              cacheToken.refresh_token = storage.getItem('refresh_token');
              cacheToken.expires_on = storage.getItem('expires_on');
              if (cacheToken.access_token && cacheToken.expires_on > moment(new Date().getTime()).unix()) {

                return $q.when({ 'Authorization': 'Token ' + cacheToken.access_token });

              } else {
                return $http.post('http://127.0.0.1:8000/api-token-refresh/',{'token': cacheToken.access_token})
                .then(response => {
                  var exp_time = moment(new Date().getTime()).unix() + 2990;
                  const token = response.data.token;
                  store.set('token', response.data.token);
                  cacheToken.access_token = token;
                  cacheToken.refresh_token = token;
                  storage.setItem('access_token', cacheToken.access_token);
                  storage.setItem('refresh_token', cacheToken.refresh_token);
                  storage.setItem('expires_on', exp_time);
                  console.log('refresh_token', cacheToken.access_token);
                  return {'Authorization': 'Token ' + cacheToken.access_token};

                },
                err => {
                  console.log('Error Refreshing token ' + err);
                }
              );
              }
            }
          }
        };


      }]);
