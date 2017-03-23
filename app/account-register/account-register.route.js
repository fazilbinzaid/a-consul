'use strict';

app.
  config(function($stateProvider) {

    // 'ngInject';

    $stateProvider.state({
      name: 'register',
      url: '/register',
      // component: 'accountRegister'
      template: '<account-register></account-register>'
    });
  });
