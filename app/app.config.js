'use strict';

angular.
  module('consultancyApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/profiles', {
          template: '<profile-list></profile-list>'
        }).
        when('/profiles/profileId', {
          template: '<profile-detail></profile-detail>'
        }).
        otherwise('/profiles');
    }
]);
