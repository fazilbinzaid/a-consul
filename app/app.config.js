'use strict';


angular.
  module('consultancyApp').
  config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {


      $locationProvider.hashPrefix('/accounts');

      $routeProvider.
        when('/profiles', {
          template: '<profile-list></profile-list>'
        }).
        when('/profiles/create', {
          template: '<profile-create-form></profile-create-form>'
        }).
        when('/profiles/:profileId', {
          template: '<profile-detail></profile-detail>'
        }).
        when('/login', {
          template: '<profile-login></profile-login>',
        }).
        when('/register', {
          template: '<account-register></account-register>',
        }).
        otherwise('/login');


        // $locationProvider.html5Mode(true);
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.withCredentials = true;

    }
])
  .run(['$http', '$cookies',
      function($http, $cookies) {

        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;

      }]);
