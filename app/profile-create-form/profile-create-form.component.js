'use strict';

angular.
  module('profileCreateForm').
  component('profileCreateForm', {
    templateUrl: 'profile-create-form/profile-create-form.template.html',
    controller: ['$http', '$scope','$compile',
      function ProfileCreateFormController($http, $scope, $compile) {

        $scope.jobs = [('Project Manager', 'Project Manager'), ('Developer', 'Developer'), ('Tester', 'Tester'),
           ('Technical Lead', 'Technical Lead'), ('Hybrid', 'Hybrid'), ('DevOps', 'DevOps'),
           ('Fresher', 'Fresher'), ('Project Coordinator', 'Project Coordinator'),( 'UI/UX Designer', 'UI/UX Designer'),
           ('UI/UX Developer', 'UI/UX Developer'), ('HTML Developer', 'HTML Developer')];

        $scope.profile = {
          "name": "Fazil",
          "email": "test@gmail.com",
          "designation": "DevOps",
          "location": "Ernakulam",
          "current_ctc": 1,
          "expected_ctc": 2,
          "notice_period": 30,
        };

        $scope.profile.skill_details = [];

        $scope.itemstoadd = [{
          "skill": "",
          "exp": "",
        }];

        $scope.add = function(skillset) {
          var index = $scope.itemstoadd.indexOf(skillset);
          $scope.profile.skill_details.splice(index, 1);
          if(skillset.skill !== "" && skillset.exp !== "") {
            $scope.profile.skill_details.push(angular.copy(skillset));
          }
        };

        $scope.addNew = function() {
          $scope.itemstoadd.push({
            "skill": "",
            "exp": "",
          });
        };

        $scope.removebutton = function(){
          var addbtn = document.getElementById('addbutton');
          var submitbtn = document.getElementById('submitbutton');
          addbtn.remove();
          submitbtn.remove();
          // var DivElem = angular.element(document.querySelector('#btndiv'));
          // var appendHtml = $compile('<button class="small" style="margin-top: 37px;margin-left: -29px;" id="removebtn" ng-click="removeitem(item)">Remove</button>')($scope);
          // DivElem.append(appendHtml);
        };

        $scope.removeitem = function(obj){
          var index = $scope.itemstoadd.indexOf(obj);
          $scope.itemstoadd.splice(index, 1);
          $scope.profile.skill_details.splice(index, 1);

        };

        $scope.submitForm = function() {
          var profile = JSON.stringify($scope.profile);
          console.log(profile);
          $http({
            method: 'POST',
            url: 'http://127.0.0.1:8000/accounts/profiles/',
            data: profile,
            headers: {'Content-Type': 'application/json'}
          })
            .then(function(data) {
              console.log($scope.profile.skill_details);
              if (data.errors) {
                $scope.errorName = data.errors.name;
                $scope.errorEmail = data.errors.email;
                $scope.errorDesignation = data.errors.designation;
                $scope.errorLocation = data.errors.location;
                $scope.errorCurrent_ctc = data.errors.current_ctc;
                $scope.errorExpected_ctc = data.errors.expected_ctc;

              }
            });

        };

      }]
  });
