'use strict';

angular
  .module('authentication.services', [])
  .factory('Authentication', ['$cookies', '$http', '$location',
      function Authentication($cookies, $http, $location) {


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

          return $http.post('http://127.0.0.1:8000/accounts/login/', {
            email: email, password: password
          }).then(loginSuccessFn, loginErrorFn);

          function loginSuccessFn(data, status, headers, config) {
            Authentication.setAuthenticatedAccount(data.data);

            // window.location = '#/accounts/profiles';
            $location.url('#/accounts/profiles')
          }

          function loginErrorFn(data, status, headers, config) {
            console.error('Epic Failure!');
          }
        }

        function logout() {
          return $http.post('http://127.0.0.1:8000/accounts/logout/')
            .then(logoutSuccessFn, logoutErrorFn);

          function logoutSuccessFn(data, status, headers, config) {
            Authentication.unauthenticate();

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
