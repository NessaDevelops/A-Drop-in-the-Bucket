'use strict';

angular.module('clientApp')
  .controller('MemoryAlbumCtrl', function ($scope, $rootScope) {

    document.body.style.backgroundImage = "url('../../images/AlbumBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var currMemory, memoryAlbum, myMemories, getMemories, getMemory, $rootScope, $window;

    $scope.memoryAlbum = memoryAlbum = {};

    getMemories = localStorage.getItem("memories");
    $scope.myMemories = JSON.parse(getMemories);

    localStorage.setItem("currMemory", JSON.stringify($scope.myMemories[0]));

    getMemory = localStorage.getItem("currMemory");
    $scope.myMemory = JSON.parse(getMemory);

    // console.log($scope.myMemory);

    memoryAlbum.changeMemory = function (name, bucketlist, location, desc, owner, members) {
      $rootScope.currMemory = {
        name : name,
        owner : owner,
        location : location,
        members : members,
        desc : desc,
        bucketlist : bucketlist
      };

      localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));
      $scope.myMemory = $rootScope.currMemory;
      console.log($rootScope.currMemory);
    };
  });
