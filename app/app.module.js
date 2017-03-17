'use strict';

angular.module('consultancyApp', [
  // 'ngModule',
  'ngRoute',
  'ngResource',
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
