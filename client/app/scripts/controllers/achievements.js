'use strict';

angular.module('clientApp')
  .controller('AchievementsCtrl', function ($scope) {

    document.body.style.backgroundImage = "url('../../images/AchievementBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var achievements, star, points;

    $scope.achievements = JSON.parse(localStorage.getItem('achievements'));

    console.log($scope.achievements);
    console.log($scope.achievements.length);

    $scope.points = 0;

    for(var i = 0; i < $scope.achievements.length; i++) {
      if($scope.achievements[i].complete == true) {
        $scope.achievements[i].star = "../images/BlueStar.png";
        $scope.points += $scope.achievements[i].points;
      } else {
        $scope.achievements[i].star = "../images/ClearStar.png";
      }
    }
  });
