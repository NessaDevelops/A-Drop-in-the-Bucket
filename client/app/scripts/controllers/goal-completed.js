'use strict';

angular.module('clientApp')
  .controller('GoalCompletedCtrl', function ($scope, $window, $http) {

    document.body.style.backgroundImage = "url('../../images/CompletedGoalBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var goalCompleted, bucketlist, getBucketlist, getMemory;

    $scope.goalCompleted = goalCompleted = {};

    getMemory = localStorage.getItem("currMemory");
    $scope.myMemory = JSON.parse(getMemory);

    getBucketlist = localStorage.getItem("currBucketlist");
    $scope.myBucketlist = JSON.parse(getBucketlist);

    goalCompleted.deleteMemory = function () {

      var request = $http.post('/deleteMemory', $scope.myBucketlist);

      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });

      $window.location.href = '#/user-dashboard';
    };
  });
