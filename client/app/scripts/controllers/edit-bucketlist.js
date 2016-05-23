'use strict';

angular.module('clientApp')
  .controller('EditBucketlistCtrl', function ($http, $window, $scope) {

    document.body.style.backgroundImage = "url('../../images/EditBucketlistBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var bucketlist, getUser, getBucketlist, editBucketlist;

    $scope.editBucketlist = editBucketlist = {};

    editBucketlist.bucketlist = bucketlist = {};

    editBucketlist.submit = function () {

      if (
        !bucketlist.name ||
        !bucketlist.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      getBucketlist = localStorage.getItem("currBucketlist");
      $scope.myBucketlist = JSON.parse(getBucketlist);

      bucketlist.owner = $scope.myUser.username;
      bucketlist.oldName = $scope.myBucketlist.name;

      if(editBucketlist.bucketlist.private == null) {
        bucketlist.private = false;
      }  else {
        bucketlist.private = true;
      }
      if(editBucketlist.bucketlist.mature == null) {
        bucketlist.mature = false;
      } else {
        bucketlist.mature = true;
      }
      console.log(bucketlist.name);
      console.log(bucketlist.oldName);
      console.log(editBucketlist.bucketlist);
      console.log($scope.myBucketlist);

      var request = $http.post('/editBucketlist', bucketlist);

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
