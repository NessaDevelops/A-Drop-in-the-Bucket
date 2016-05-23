'use strict';

angular.module('clientApp')
  .controller('CreateMemoryCtrl', function ($rootScope, $http, $window, $scope) {

    document.body.style.backgroundImage = "url('../../images/CreateMemoryBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var memory, createMemory, getGoal, getBucketlist, myBucketlist;

    $scope.createMemory = createMemory = {};

    createMemory.memory = memory = {};

    getGoal = localStorage.getItem("currGoal");
    $scope.myGoal = JSON.parse(getGoal);

    getBucketlist = localStorage.getItem("currBucketlist");
    $scope.myBucketlist = JSON.parse(getBucketlist);

    console.log($scope.myGoal);

    createMemory.submit = function () {

      if (
        !memory.location ||
        !memory.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      console.log($scope.myGoal);
      memory.bucketlist = $scope.myBucketlist.name;
      memory.owner = $scope.myBucketlist.owner;
      memory.name = $scope.myGoal.name;
      console.log(memory);

      var request = $http.post('/createMemory', memory);

      request.success(function (data) {
        console.log($scope.myGoal);

        var request2 = $http.post('/deleteGoal', $scope.myGoal);

        request2.success(function (data) {
          console.log(data);
        });

        request2.error(function (data) {
          console.log(data);
        });
        
        console.log(data); //
        $window.location.href = '#/view-bucketlist';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };
  });
