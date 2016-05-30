'use strict';

angular.module('clientApp')
  .controller('CreateGoalCtrl', function ($scope, $http, $window, $rootScope) {

    document.body.style.backgroundImage = "url('../../images/CreateGoalBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var goal, getUser, getBucketlist, createGoal, myBucketlist, myUser, imageFile;

    $scope.createGoal = createGoal = {};

    createGoal.goal = goal = {};
    imageFile = {};

    createGoal.submit = function () {

      var book = {
        price: 13,
        pages: 500,
        pricePerPage: this.price / this.pages
      };

      var request3 = $http.post('/addStaticGoals', book);

      request3.success(function (data) {
        console.log(data);
        console.log('here');
      });

      request3.error(function (data) {
        console.log(data);
        console.log('there');
      });

      if (
        !goal.name ||
        !goal.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      var file = document.getElementById("upload-goal-image").files[0];
      // console.log(file);

      saveImage(file);

      getUser = localStorage.getItem("user");
      $scope.myUser = JSON.parse(getUser);

      getBucketlist = localStorage.getItem("currBucketlist");
      $scope.myBucketlist = JSON.parse(getBucketlist);

      goal.bucketlist = $scope.myBucketlist.name;
      goal.owner = $scope.myUser.username;
      goal.image = file.name;
      console.log(goal);

      var request = $http.post('/createGoal', goal);

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

    function saveImage(file) {
      console.log("PLEASE HERE:   "+file);
      imageFile.name = file.name;
      imageFile.size = file.size;
      imageFile.type = file.type;

      var reader = new FileReader();
      reader.onload = function (e) {
        var data = this.result;
        // console.log("data: "+data);
        localStorage.setItem(file.name, data);
      };
      reader.readAsDataURL(file);
      console.log("file: "+file);
    }
  });
