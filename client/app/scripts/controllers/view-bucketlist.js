'use strict';

app.controller('ViewBucketlistCtrl', function ($scope, $rootScope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/ViewBucketlistBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
  
    var viewBucketlist, bucketlist, getBucketlist;

    $scope.viewBucketlist = viewBucketlist = {};

    getBucketlist = localStorage.getItem("currBucketlist");
    $scope.myBucketlist = JSON.parse(getBucketlist);

    var request = $http.post('/findGoals', $scope.myBucketlist);

    request.success(function (data) {
      $rootScope.goals = data.getGoals;
      console.log($rootScope.goals);
      $scope.myGoals = $rootScope.goals;
    });

    request.error(function (data) {
      console.log(data);
    });

  var request2 = $http.post('/findMemories', $scope.myBucketlist);

  request2.success(function (data) {
    $rootScope.memories = data.getMemories;
    console.log($rootScope.memories);
    $scope.myMemories = $rootScope.memories;
  });

  request2.error(function (data) {
    console.log(data);
  });

  viewBucketlist.editGoal = function (name, desc, loc) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: loc
    };

    console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));
    $window.location.href = '#/edit-goal';
  };

  viewBucketlist.editMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));
    $window.location.href = '#/edit-memory';
  };

  viewBucketlist.finishGoal = function (name, desc, location) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: location
    };

    console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));
    $window.location.href = '#/create-memory';
  };

  viewBucketlist.viewMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));
    $window.location.href = '#/goal-completed';
  };

    viewBucketlist.deleteBucketlist = function () {
      console.log($scope.myBucketlist);

      var request = $http.post('/deleteBucketlist', $scope.myBucketlist);

      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });

      $window.location.href = '#/user-dashboard';
    };

  viewBucketlist.deleteGoal = function (name, desc, location) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: location
    };

    console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));

    var request = $http.post('/deleteGoal', $rootScope.currGoal);

    request.success(function (data) {
      console.log(data);
    });

    request.error(function (data) {
      console.log(data);
    });

    $window.location.href = '#/view-all-bucketlists';
  }

  viewBucketlist.deleteMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));

    var request = $http.post('/deleteMemory', $rootScope.currMemory);

    request.success(function (data) {
      console.log(data);
    });

    request.error(function (data) {
      console.log(data);
    });

    $window.location.href = '#/view-all-bucketlists';
  }
  });
