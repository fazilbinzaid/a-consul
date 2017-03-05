'use strict';

angular.
  module('profileCreateForm').
  component('profileCreateForm', {
    templateUrl: 'profile-create-form/profile-create-form.template.html',
    controller: ['$http', '$scope',
      function ProfileCreateFormController($http, $scope) {

        $scope.profile = {};

        $scope.submitForm = function() {

          $http({
            method: 'POST',
            url: 'http://accounts/profiles',
            data: $scope.profile,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          })
           .success(function(data) {
             if (data.errors) {
               $scope.errorName = data.errors.name;

             } else {
               $scope.message = data.message;
             }
           });
        };

      }]
  });
