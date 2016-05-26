'use strict';

app.controller('UserDashboardCtrl', function ($scope, $rootScope, $http, $window) {

  document.body.style.backgroundImage = "url('../../images/UserDashBkgrnd.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";

  var userDash, user;

  $scope.userDash = userDash = {};

  user = {};
  user = localStorage.getItem("user");
  $scope.userParse = JSON.parse(user);
  // console.log($scope.userParse);

  // console.log("Logged in status: " + localStorage.getItem("loggedIn"));

  var request = $http.post('/findBucketlist', $scope.userParse);

  request.success(function (data) {
    localStorage.setItem("bucketlists", JSON.stringify(data.getBucketlists));
    // console.log(localStorage.getItem("bucketlists"));
    var getBucketlists = localStorage.getItem("bucketlists");
    $scope.myBucketlists = JSON.parse(getBucketlists);
    // console.log($scope.myBucketlists);
  });

  request.error(function (data) {
    console.log(data);
    console.log(data.getBucketlists);
  });

  var request2 = $http.post('/findAllMemories', $scope.userParse);

  request2.success(function (data) {
    localStorage.setItem("memories", JSON.stringify(data.getMemories));
    var getMemories = localStorage.getItem("memories");
    $scope.myMemories = JSON.parse(getMemories);
    // console.log($scope.myMemories);
  });

  request2.error(function (data) {
    console.log(data);
  });

  userDash.changeBucketlist = function (name, owner, members, desc, tags) {
    $rootScope.currBucketlist = {
      name : name,
      owner : owner,
      members : members,
      desc : desc,
      tags : tags
    };

    localStorage.setItem("currBucketlist", JSON.stringify($rootScope.currBucketlist));

    $window.location.href = '#/view-bucketlist';
  };

  userDash.changeMemory = function (name, bucketlist, location, desc, owner, members) {
    $rootScope.currMemory = {
      name : name,
      owner : owner,
      location : location,
      members : members,
      desc : desc,
      bucketlist : bucketlist
    };

    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));

    $window.location.href = '#/goal-completed';
  };
});
