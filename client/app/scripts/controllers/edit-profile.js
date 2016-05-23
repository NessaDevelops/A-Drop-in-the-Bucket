'use strict';

angular.module('clientApp')
  .controller('EditProfileCtrl', function ($scope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/EditProfBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var user, getUser, editProfile;

    $scope.editProfile = editProfile = {};

    editProfile.user = user = {};

    editProfile.submit = function () {

      if (
        !user.email
      ) {
        alert('Please fill out email form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      user.username = $scope.myUser.username;

      console.log($scope.myUser);
      console.log(user);

      var request = $http.post('/editUser', user);

      request.success(function (data) {
        console.log(data);
        $window.location.href = '#/user-dashboard';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };

    editProfile.submitPassword = function () {

      if (
        !user.oldpw ||
        !user.pw1 ||
        !user.pw2
      ) {
        alert('Please fill out email form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      user.username = $scope.myUser.username;

      console.log($scope.myUser);
      console.log(user);

      var request = $http.post('/editUser', user);

      request.success(function (data) {
        console.log(data);
        $window.location.href = '#/user-dashboard';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };
  });

