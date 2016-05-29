'use strict';

angular.module('clientApp')
  .controller('CreateMemoryCtrl', function ($rootScope, $http, $window, $scope) {

    document.body.style.backgroundImage = "url('../../images/CreateMemoryBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundPosition = "center";

    var memory, createMemory, getGoal, getBucketlist, myBucketlist, imageFile;

    $scope.createMemory = createMemory = {};

    createMemory.memory = memory = {};
    imageFile = {};

    getGoal = localStorage.getItem("currGoal");
    $scope.myGoal = JSON.parse(getGoal);

    getBucketlist = localStorage.getItem("currBucketlist");
    $scope.myBucketlist = JSON.parse(getBucketlist);

    console.log($scope.myGoal);

    createMemory.submit = function () {

      if (
        !memory.location ||
        !memory.description
      ) {
        alert('Please fill out name and description form fields.');
        return false;
      }

      var file = document.getElementById("upload-memory-image").files[0];
      // console.log(file);

      saveImage(file);

      console.log($scope.myGoal);
      memory.bucketlist = $scope.myBucketlist.name;
      memory.owner = $scope.myBucketlist.owner;
      memory.name = $scope.myGoal.name;
      memory.image = file.name;
      console.log(memory);

      var request = $http.post('/createMemory', memory);

      request.success(function (data) {
        console.log($scope.myGoal);

        var request2 = $http.post('/deleteGoal', $scope.myGoal);

        request2.success(function (data) {
          console.log(data);
        });

        request2.error(function (data) {
          console.log(data);
        });

        getAchievements();

        console.log(data); //
        $window.location.href = '#/view-bucketlist';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };

    function saveImage(file) {
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
      // console.log("file: "+file);
    }

    function getAchievements() {

      var request = $http.post('/findAchievements', $scope.myBucketlist);

      request.success(function (data) {
        console.log(data);
        console.log(data.getAchievements);

        localStorage.setItem('achievements', JSON.stringify(data.getAchievements));

        var request2 = $http.post('/findAllStaticGoals', memory);

        request2.success(function (data) {
          console.log(data);
          console.log(data.getGoals);

          //If memory is a static goal then do achievement check
          if(data.getGoals != null && data.getGoals != 'undefined') {
            localStorage.setItem('currStaticGoal', JSON.stringify(data.getGoals));
            globalTrotter();
            globalTrotterElitist();
          }
        });

        request2.error(function (data) {
          console.log(data);
        });
      });

      request.error(function (data) {
        console.log(data);
      });
    }

    function globalTrotter() {
      // localStorage.setItem('completedConts', '');
      $scope.myAchieves = JSON.parse(localStorage.getItem('achievements'));
      console.log('what r achieves: '+$scope.myAchieves);
      var achievement = $scope.myAchieves[0];
      console.log("achievement name: "+achievement.name);

      if(!achievement.complete) {
        $scope.myMemory = JSON.parse(localStorage.getItem('currStaticGoal'));

        console.log("mymemory: "+$scope.myMemory[0].name);

        var getCompletedConts = localStorage.getItem('completedConts');
        if(getCompletedConts === null || getCompletedConts === '') {
          console.log("its null :(");
          var completedConts = [];
          completedConts.push($scope.myMemory[0].continent);
          console.log(completedConts);
          localStorage.setItem('completedConts', JSON.stringify(completedConts));
          updateAchieve(achievement);
        } else {
          console.log("its not null :)");
          $scope.myCompletedConts = JSON.parse(getCompletedConts);
          console.log("getcompletedconts: "+$scope.myCompletedConts);

          var newConts = [];
          newConts.push($scope.myCompletedConts);
          var stay = true;
          for (var i = 0; i < newConts.length; i++) {
            console.log(newConts.length);
            if(newConts.length == 1) {
              console.log("this cont: " + newConts);
              console.log("mymem cont: " + $scope.myMemory[0].continent);
              if (newConts == $scope.myMemory[0].continent) {
                stay = false;
              }
            } else {
              console.log("this cont: " + newConts[i]);
              if (stay) {
                console.log("mymem cont: " + $scope.myMemory[0].continent);
                if (newConts[i] == $scope.myMemory[0].continent) {
                  stay = false;
                }
              }
            }
          }
          if(stay) {
            console.log('dont have cont in alrdy');
            newConts.push($scope.myMemory[0].continent);
            localStorage.setItem('completedConts', JSON.stringify(newConts));
            updateAchieve(achievement);
          }
        }
      }
    }

    function globalTrotterElitist() {
      $scope.myAchieves = JSON.parse(localStorage.getItem('achievements'));
      console.log('what r achieves: '+$scope.myAchieves);
      var achievement = $scope.myAchieves[1];
      console.log("achievement name: "+achievement.name);

      if(!achievement.complete) {
        $scope.myMemory = JSON.parse(localStorage.getItem('currStaticGoal'));

        console.log("mymemory: "+$scope.myMemory[0].name);

        var getCompletedConts = localStorage.getItem('completedConts');
        if(getCompletedConts === null || getCompletedConts === '') {
          console.log("its null :(");
          var completedConts = [];
          completedConts.push($scope.myMemory[0].continent);
          console.log(completedConts);
          localStorage.setItem('completedConts', JSON.stringify(completedConts));
          updateAchieve(achievement);
        } else {
          console.log("its not null :)");
          $scope.myCompletedConts = JSON.parse(getCompletedConts);
          console.log("getcompletedconts: "+$scope.myCompletedConts);

          var newConts = [];
          newConts.push($scope.myCompletedConts);
          var stay = true;
          for (var i = 0; i < newConts.length; i++) {
            console.log(newConts.length);
            if(newConts.length == 1) {
              console.log("this cont: " + newConts);
              console.log("mymem cont: " + $scope.myMemory[0].continent);
              if (newConts == $scope.myMemory[0].continent) {
                stay = false;
              }
            } else {
              console.log("this cont: " + newConts[i]);
              if (stay) {
                console.log("mymem cont: " + $scope.myMemory[0].continent);
                if (newConts[i] == $scope.myMemory[0].continent) {
                  stay = false;
                }
              }
            }
          }
          if(stay) {
            console.log('dont have cont in alrdy');
            newConts.push($scope.myMemory[0].continent);
            localStorage.setItem('completedConts', JSON.stringify(newConts));
            updateAchieve(achievement);
          }
        }
      }

    }

    function feedMe() {

    }

    function viking() {

    }

    function justKeepSwimming() {

    }

    function updateAchieve(achievement) {
      console.log(achievement);
      console.log(achievement.name);
      console.log(achievement.goalsCompleted);
      achievement.goalsCompleted += 1;
      console.log(achievement.goalsCompleted);

      if(achievement.goalsCompleted === achievement.goalsNeeded) {
        achievement.complete = true;
      }

      var request = $http.post('/updateAchievement', achievement);

      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });
    }
  });
