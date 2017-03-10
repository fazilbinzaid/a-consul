'use strict';

angular.
  module('consultancyApp', ['ngResource']).
  config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {

      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

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
        otherwise('/profiles');

        // $locationProvider.html5Mode(true);
    }
]).
factory('api', function($resource){
  function add_auth_header(data, headersGetter){

    var headers = headersGetter();
    // headers['Authorization'] = ('Basic ' + btoa(data.username + ':' + data.password));
    headers.Authorization = ('Basic ' + btoa(data.username + ':' + data.password));
  }
  return {
    auth: $resource('/api/auth\\/', {}, {
      login: {method: 'POST', transformRequest: add_auth_header},
      logout: {method: 'DELETE'}
    }),
    users: $resource('/api/users\\/', {}, {
      create: {method: 'POST'}
    })
  };
});
