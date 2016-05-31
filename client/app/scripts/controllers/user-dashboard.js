'use strict';

app.controller('UserDashboardCtrl', function ($scope, $rootScope, $http, $window) {

  document.body.style.backgroundImage = "url('../../images/UserDashBkgrnd.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";

  var userDash, user, getImgData;

  $scope.userDash = userDash = {};

  user = {};
  user = localStorage.getItem("user");
  $scope.userParse = JSON.parse(user);
  console.log($scope.userParse);

  // console.log("Logged in status: " + localStorage.getItem("loggedIn"));

  var request = $http.post('/findBucketlist', $scope.userParse);

  request.success(function (data) {
    localStorage.setItem("bucketlists", JSON.stringify(data.getBucketlists));
    // console.log(localStorage.getItem("bucketlists"));
    var getBucketlists = localStorage.getItem("bucketlists");
    $scope.myBucketlists = JSON.parse(getBucketlists);
    // console.log($scope.myBucketlists);
  });

  request.error(function (data) {
    console.log(data);
    console.log(data.getBucketlists);
  });

  var request4 = $http.post('/findBucketlistsShared', $scope.userParse);

  request4.success(function (data) {
    // console.log(data.getBucketlists);
    var reString = $scope.userParse.username;

    var re = new RegExp(reString);
    // console.log(re);
    var m;
    localStorage.removeItem("sharedBucketlists");
    if(data.getBucketlists != null && data.getBucketlists != undefined) {
      for(var i = 0; i < data.getBucketlists.length; i++) {
        if((m = re.exec(data.getBucketlists[i].members)) !== null) {
          if(m.index === re.lastIndex) {
            re.lastIndex++;
            console.log(m[0]);
            console.log(data.getBucketlists[i]);
            var retrieveSharedBlist = localStorage.getItem('sharedBucketlists');
            var getSharedBlist;

            if(retrieveSharedBlist != null && retrieveSharedBlist != 'undefined') {
              getSharedBlist = JSON.parse(retrieveSharedBlist);
              getSharedBlist.push(data.getBucketlists[i]);
              console.log(getSharedBlist);
              localStorage.setItem("sharedBucketlists", JSON.stringify(getSharedBlist));
            } else {
              var sharedBlist = [];
              sharedBlist = [data.getBucketlists[i]];
              console.log(sharedBlist);
              localStorage.setItem("sharedBucketlists", JSON.stringify(sharedBlist));
            }

          }
        }
      }
    }
    var mySharedBucks = localStorage.getItem('sharedBucketlists');
    $scope.sharedBucks = JSON.parse(mySharedBucks);
    // console.log($scope.mySharedBucks);
    // console.log($scope.myBucketlists);
  });

  request4.error(function (data) {
    console.log(data);
    console.log(data.getBucketlists);
  });

  var request2 = $http.post('/findAllMemories', $scope.userParse);

  request2.success(function (data) {
    localStorage.setItem("memories", JSON.stringify(data.getMemories));
    var getMemories = localStorage.getItem("memories");
    $scope.myMemories = JSON.parse(getMemories);
    for(var i = 0; i < data.getMemories.length; i++) {
      var imgData = $scope.myMemories[i].images;
      getImgData = localStorage.getItem(imgData);
      $scope.myMemories[i].images = getImgData;
    }
    // console.log($scope.myMemories);
  });

  request2.error(function (data) {
    console.log(data);
  });

  userDash.changeBucketlist = function (name, owner, members, desc, tags) {
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

  userDash.changeMemory = function (name, bucketlist, location, desc, owner, members) {
    $rootScope.currMemory = {
      name : name,
      owner : owner,
      location : location,
      members : members,
      desc : desc,
      bucketlist : bucketlist
    };

    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));

    $window.location.href = '#/goal-completed';
  };
});
