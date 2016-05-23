'use strict';

app.controller('HeaderCtrl', function ($scope, $rootScope, $window) {

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var header;

  $scope.header = header = {};

  $scope.loggedIn = localStorage.getItem("loggedIn");;

  header.logout = function() {
    console.log(localStorage.getItem("loggedIn"));
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user", null);
    console.log("Logged in status: " + localStorage.getItem("loggedIn"));
    console.log("user: " + localStorage.getItem("user"));
  }
});
