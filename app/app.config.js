'use strict';


angular.
  module('consultancyApp').
  config(['$locationProvider', '$routeProvider', '$httpProvider', 'jwtOptionsProvider',
          '$stateProvider', '$urlRouterProvider',
    function config($locationProvider, $routeProvider, $httpProvider,
                    jwtOptionsProvider, $stateProvider, $urlRouterProvider) {


      $locationProvider.hashPrefix('/accounts');

      jwtOptionsProvider.config({
        authPrefix: 'Token ',
        whiteListedDomains: ['http://127.0.0.1:8000/', 'jsonplaceholder.typicode.com'],
      });

      $httpProvider.interceptors.push('Interceptor');

      // $routeProvider.
      //   when('/profiles', {
      //     template: '<profile-list></profile-list>'
      //   }).
      //   when('/profiles/create', {
      //     template: '<profile-create-form></profile-create-form>'
      //   }).
      //   when('/profiles/:profileId', {
      //     template: '<profile-detail></profile-detail>'
      //   }).
      //   when('/login', {
      //     template: '<profile-login></profile-login>'
      //   }).
      //   when('/register', {
      //     template: '<account-register></account-register>'
      //   }).
      //   when('/404_page', {
      //     templateUrl: 'views/404.html'
      //   }).
      //   when('/deleted_page', {
      //     templateUrl: 'views/delete.html'
      //   }).
      //   otherwise('/login');

      $urlRouterProvider.otherwise('/login');


        // $locationProvider.html5Mode(true);
        // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        // $httpProvider.defaults.withCredentials = true;

    }
]);
