'use strict';

app.
  config(function($stateProvider) {

    'ngInject';

    $stateProvider.state({
      name: 'login',
      url: '/login',
      // component: 'profileLogin',
      template: '<profile-login></profile-login>'
      // templateUrl: 'profile-login/profile-login.template.html'
    });
  });
