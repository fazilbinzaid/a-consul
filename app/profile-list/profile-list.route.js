'use strict';

app.
  config(function($stateProvider) {

    // 'ngInject';

    $stateProvider.state({
      name: 'profiles',
      url: '/profiles',
      // component: 'profileList'
      template: '<profile-list></profile-list>'
    });
  });
