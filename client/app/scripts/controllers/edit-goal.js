'use strict';

angular.module('clientApp')
  .controller('EditGoalCtrl', function ($scope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/EditBucketlistBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var goal, getUser, getGoal, editGoal;

    $scope.editGoal = editGoal = {};

    editGoal.goal = goal = {};

    editGoal.submit = function () {

      if (
        !goal.name ||
        !goal.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      getGoal = localStorage.getItem("currGoal");
      $scope.myGoal = JSON.parse(getGoal);

      goal.owner = $scope.myUser.username;
      goal.oldName = $scope.myGoal.name;
      
      console.log($scope.myGoal);
      console.log(goal);

      var request = $http.post('/editGoal', goal);

      request.success(function (data) {
        console.log(data);
        $window.location.href = '#/view-bucketlist';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })

    };
  });
