'use strict';

app.
  config(function($stateProvider) {

    // 'ngInject';

    $stateProvider.state({
      name: 'create',
      url: '/create',
      // component: 'profileCreateForm'
      template: '<profile-create-form></profile-create-form>',
      params: {
        obj: null
      }
    });
  });
