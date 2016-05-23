'use strict';

app.controller('ViewAllBucketlistsCtrl', function ($scope, $rootScope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/MyBucketlistsBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var viewAllBucketlists, myBucketlists, getBucketlists;

    $scope.viewAllBucketlists = viewAllBucketlists = {};

    getBucketlists = localStorage.getItem("bucketlists");
    $scope.myBucketlists = JSON.parse(getBucketlists);

    viewAllBucketlists.change = function (name, owner, members, desc, tags) {
      $rootScope.currBucketlist = {
        name : name,
        owner : owner,
        members : members,
        desc : desc,
        tags : tags
      };

      localStorage.setItem("currBucketlist", JSON.stringify($rootScope.currBucketlist));

      $window.location.href = '#/view-bucketlist';
    };

  });
