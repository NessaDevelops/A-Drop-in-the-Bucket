'use strict';

app.controller('UserDashboardCtrl', function ($scope, $rootScope, $http, $window) {

  document.body.style.backgroundImage = "url('../../images/UserDashBkgrnd.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";

  var userDash, user, getBucketlists;

  $scope.userDash = userDash = {};

  user = {};
  user = localStorage.getItem("user");
  $scope.userParse = JSON.parse(user);

  console.log("Logged in status: " + localStorage.getItem("loggedIn"));

  var request = $http.post('/findBucketlist', $scope.userParse);

  request.success(function (data) {
    localStorage.setItem("bucketlists", JSON.stringify(data.getBucketlists));
    console.log(localStorage.getItem("bucketlists"));
    var getBucketlists = localStorage.getItem("bucketlists");
    $scope.myBucketlists = JSON.parse(getBucketlists);
    console.log($scope.myBucketlists);
  });

  request.error(function (data) {
    console.log(data);
    console.log(data.getBucketlists);
  });

});
