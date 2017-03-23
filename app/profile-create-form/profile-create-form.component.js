'use strict';

angular.
  module('profileCreateForm', []).
  component('profileCreateForm', {
    templateUrl: 'profile-create-form/profile-create-form.template.html',
    controller: ProfileCreateFormController
  });

  function ProfileCreateFormController($http, $scope, store, Profiles, $location) {

    'ngInject';

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

    $scope.token = store.get('token');

    $scope.profile.skill_details = [];

    $scope.itemstoadd = [{
      "skill": "",
      "exp": "",
    }];

    $scope.add = function(skillset) {
      $scope.profile.skill_details = [];
      $scope.profile.skill_details.push(...skillset);
    };

    $scope.addNew = function() {
      $scope.itemstoadd.push({
        "skill": "",
        "exp": "",
      });
    };

    $scope.removeitem = function(index){
      $scope.itemstoadd.splice(index, 1);

    };


    $scope.submitForm = function() {
      
      var profile = JSON.stringify($scope.profile);

      Profiles.create(profile)
      .then(submitFormSuccessFn, submitFormErrorFn);

      function submitFormSuccessFn(response, status, headers, config) {
        console.log(response.data.id);
        $location.url('/profiles/' + response.data.id);
      }

      function submitFormErrorFn(response, status, headers, config) {
        console.log(response.data);
        $scope.errorName = response.data.name;
        $scope.errorEmail = response.data.email;
        $scope.errorDesignation = response.data.designation;
        $scope.errorLocation = response.data.location;
        $scope.errorCurrent_ctc = response.data.current_ctc;
        $scope.errorExpected_ctc = response.data.expected_ctc;
        $scope.errorNotice_period = response.data.notice_period;
        $scope.errorSkill = response.data.skill_details[0].skill;
        $scope.errorExp = response.data.skill_details[0].exp;
        console.log('Epic Failure!');
      }
    };
}
