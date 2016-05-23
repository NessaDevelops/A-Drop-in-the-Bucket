'use strict';

angular.module('clientApp')
  .controller('EditMemoryCtrl', function ($scope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/EditBucketlistBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var memory, getUser, getMemory, editMemory;

    $scope.editMemory = editMemory = {};

    editMemory.memory = memory = {};

    editMemory.submit = function () {

      if (
        !memory.name ||
        !memory.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      getMemory = localStorage.getItem("currMemory");
      $scope.myMemory = JSON.parse(getMemory);

      memory.owner = $scope.myUser.username;
      memory.oldName = $scope.myMemory.name;

      console.log($scope.myMemory);
      console.log(memory);

      var request = $http.post('/editMemory', memory);

      request.success(function (data) {
        console.log(data);
        $window.location.href = '#/view-all-bucketlists';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })

    };
  });
