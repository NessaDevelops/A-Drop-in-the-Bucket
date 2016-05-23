'use strict';

angular.module('clientApp')
  .controller('CreateBucketlistCtrl', function ($scope, $http, $window, $rootScope) {

    document.body.style.backgroundImage = "url('../../images/CreateListBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var bucketlist, getUser, createBucketlist;

    $scope.createBucketlist = createBucketlist = {};

    createBucketlist.bucketlist = bucketlist = {};

    createBucketlist.submit = function () {

      if (
        !bucketlist.name ||
        !bucketlist.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      bucketlist.owner = $scope.myUser.username;
      console.log(bucketlist);

      var request = $http.post('/createBucketlist', bucketlist);

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
