'use strict';

angular
  .module('interceptor.services', [])
  .factory( 'Interceptor', ['$q', '$location', 'store',
      function($q, $location, store) {

        return {
            'request': function (config) {
                config.headers = config.headers || {};
                var token = store.get('token');
                if (token) {
                    config.headers.Authorization = 'Token ' + token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
}]);
