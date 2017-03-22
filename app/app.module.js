'use strict';

angular.module('consultancyApp', [
  // 'ngModule',
  'ngRoute',
  'ui.router',
  'ngResource',
  'ngTagsInput',
  'authentication.services',
  'profiles.services',
  'interceptor.services',
  'tokeninterceptor.services',
  'ngCookies',
  'angular-storage',
  'angular-jwt',
  'angularMoment',
  // 'snackbar.services',
  'Navbar',
  'profileList',
  'profileDetail',
  'profileCreateForm',
  'profileLogin',
  'accountRegister',
]);
// ngModule.constant('moment', require('moment-timezone'));

const localhost = 'http://127.0.0.1:8000/';
const heroku = 'https://evening-plains-46324.herokuapp.com/';
