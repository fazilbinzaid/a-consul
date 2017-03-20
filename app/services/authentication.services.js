'use strict';

angular
  .module('authentication.services', [])
  .factory('Authentication', ['$cookies', '$http', '$location', 'store', '$window', 'moment', 'jwtHelper',
      function Authentication($cookies, $http, $location, store, $window, moment, jwtHelper) {


        var Authentication = {
          getAuthenticatedAccount: getAuthenticatedAccount,
          isAuthenticated: isAuthenticated,
          login: login,
          logout: logout,
          register: register,
          setAuthenticatedAccount: setAuthenticatedAccount,
          unauthenticate: unauthenticate
        };
        return Authentication;



        function register(email, password) {
          return $http.post('http://127.0.0.1:8000/accounts/user/', {
            email: email,
            password: password
          }).then(registerSuccessFn, registerErrorFn);

          function registerSuccessFn(data, status, headers, config) {
            Authentication.login(email, password);
          }
          function registerErrorFn(data, status, headers, config) {
            console.error('Epic Failure!');
          }
        }

        function login(email, password) {

          return $http.post('http://127.0.0.1:8000/api-token-auth/', {
            email: email, password: password
          }).then(loginSuccessFn, loginErrorFn);

          function loginSuccessFn(data, status, headers, config) {

            // var exp_time = moment(jwtHelper.getTokenExpirationDate(data.data.token)).unix();
            // store.set('expires_on', exp_time);
            // var tokenPayload = jwtHelper.decodeToken(data.data.token);
            store.set('token', data.data.token);

            $location.url('/profiles')
          }

          function loginErrorFn(data, status, headers, config) {
            console.error('Epic Failure!');
          }
        }

        function logout() {
          return $http.post('http://127.0.0.1:8000/accounts/logout/')
            .then(logoutSuccessFn, logoutErrorFn);

          function logoutSuccessFn(data, status, headers, config) {

            store.remove('token');
            $window.localStorage.clear();
            window.location = '#/accounts/login'
          }

          function logoutErrorFn(data, status, headers, config) {
            console.error('Epic Failure!');
          }
        }


        function getAuthenticatedAccount() {
          var token = store.get('token');
          if (token) {
            var payload = jwtHelper.decodeToken(token);
            return payload;
          }
        }

        function isAuthenticated() {
          var token = store.get('token');
          if (token && !jwtHelper.isTokenExpired(token)) {
            return true;
          }
        }

        function setAuthenticatedAccount(account) {
        }

        function unauthenticate() {
          store.remove('token');
          store.remove('expires_on');
          $window.localStorage.clear();
        }


      }]);
