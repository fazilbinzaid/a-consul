'use strict';

angular.
  module('profileLogin').
  component('profileLogin', {
    templateUrl: 'profile-login/profile-login.template.html',
    controller: ['$http', '$scope',
      function ProfileLoginController($scope, api) {

        $('#auth_form_input').checkAndTriggerAutoFillEvent();

        $scope.getCredentials = function(){
          return {username: $scope.username, password: $scope.password};
        };

        $scope.login = function(){
          api.auth.login($scope.getCredentials()).
            $promise.
                then(function(data){
                  $scope.user = data.username;
                }).
                catch(function(data){
                  alert(data.data.detail);
                });
        };

        $scope.logout = function(){
          api.auth.logout(function(){
            $scope.user = undefined;
          });
        };

        $scope.register = function($event){
          $event.preventDefault();
          api.users.create($scope.getCredentials()).
              $promise.
                  then($scope.login).
                  catch(function(data){
                    alert(data.data.username);
                  });
        };

      }]
  });
