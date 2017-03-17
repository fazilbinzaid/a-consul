'use strict';

angular
  .module('authentication.services', [])
  .factory('Authentication', ['$cookies', '$http', '$location', 'store', '$window', 'moment',
      function Authentication($cookies, $http, $location, store, $window, moment) {


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

          // $http.get('http://127.0.0.1:8000/api/auth/login/');

          return $http.post('http://127.0.0.1:8000/api-token-auth/', {
            email: email, password: password
          }).then(loginSuccessFn, loginErrorFn);

          function loginSuccessFn(data, status, headers, config) {

            var exp_time = moment(new Date().getTime()).unix() + 2990;
            store.set('token', data.data.token);
            store.set('refresh_token', data.data.token);
            store.set('expires_on', exp_time);
            $window.localStorage.setItem('access_token', data.data.token);
            $window.localStorage.setItem('refresh_token', data.data.token);
            $window.localStorage.setItem('expires_on', exp_time);
            console.log('token: ', $window.localStorage.getItem('access_token'));
            console.log('exp_time', exp_time);
            // Authentication.setAuthenticatedAccount(data.data);

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
          if (!$cookies.authenticatedAccount) {
            return;
          }

          return JSON.parse($cookies.authenticatedAccount);
        }

        function isAuthenticated() {
          return !!$cookies.authenticatedAccount;
        }

        function setAuthenticatedAccount(account) {
          $cookies.authenticatedAccount = JSON.stringify(account);
        }

        function unauthenticate() {
          delete $cookies.authenticatedAccount;
        }


      }]);
