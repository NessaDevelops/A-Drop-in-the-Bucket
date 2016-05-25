'use strict';

angular.module('clientApp')
  .controller('CreateGoalCtrl', function ($scope, $http, $window, $rootScope) {

    document.body.style.backgroundImage = "url('../../images/CreateGoalBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var goal, getUser, getBucketlist, createGoal, myBucketlist, myUser;

    $scope.createGoal = createGoal = {};

    createGoal.goal = goal = {};

    createGoal.submit = function () {

      if (
        !goal.name ||
        !goal.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      getBucketlist = localStorage.getItem("currBucketlist");
      $scope.myBucketlist = JSON.parse(getBucketlist);

      goal.bucketlist = $scope.myBucketlist.name;
      goal.owner = $scope.myUser.username;
      console.log(goal);
      console.log(goal.image);

      var request = $http.post('/createGoal', goal);

      request.success(function (data) {
        console.log(data); //
        $window.location.href = '#/user-dashboard';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };
  });
