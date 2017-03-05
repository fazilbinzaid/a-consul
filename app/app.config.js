'use strict';

angular.
  module('consultancyApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
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
]);
