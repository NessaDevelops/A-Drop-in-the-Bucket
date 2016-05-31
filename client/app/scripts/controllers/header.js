'use strict';

app.controller('HeaderCtrl', function ($scope, $rootScope, $window, $http) {

  var header, user, getUser, loggedIn;

  $scope.header = header = {};

  $scope.loggedIn = localStorage.getItem("loggedIn");;
  console.log($scope.loggedIn);

  header.logout = function() {
    console.log(localStorage.getItem("loggedIn"));
    localStorage.setItem("loggedIn", false);
    console.log("Logged in status: " + localStorage.getItem("loggedIn"));
    console.log("user: " + localStorage.getItem("user"));

    getUser = localStorage.getItem("user");
    $scope.myUser = JSON.parse(getUser);

    console.log($scope.myUser);

    var request = $http.post('/editUser', $scope.myUser);

    request.success(function (data) {
      console.log(data);
      localStorage.setItem("user", null);
      console.log('here2');
    });

    request.error(function (data) {
      console.log(data);
      console.log('there2');
    })
  }
});
