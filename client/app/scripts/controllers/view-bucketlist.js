'use strict';

app.controller('ViewBucketlistCtrl', function ($scope, $rootScope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/ViewBucketlistBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var viewBucketlist, bucketlist, getBucketlist, location, getImgData;

    $scope.viewBucketlist = viewBucketlist = {};

    getBucketlist = localStorage.getItem("currBucketlist");
    $scope.myBucketlist = JSON.parse(getBucketlist);

    var request = $http.post('/findGoals', $scope.myBucketlist);

    request.success(function (data) {
      $rootScope.goals = data.getGoals;
      // console.log($rootScope.goals[0]);
      var imgData = $rootScope.goals[0].images;
      getImgData = localStorage.getItem(imgData);
      // console.log("img data: "+getImgData);;
      $scope.myGoals = $rootScope.goals;
      $scope.myGoals[0].images = getImgData;
      console.log($scope.myGoals[0].images);
      // f.src = getImgData;
      // var f = document.getElementById('my-goal-image').setAttribute("src", getImgData);
      // console.log(f);
    });

    request.error(function (data) {
      console.log(data);
    });



  var request2 = $http.post('/findMemories', $scope.myBucketlist);

  request2.success(function (data) {
    $rootScope.memories = data.getMemories;
    // console.log($rootScope.memories);
    $scope.myMemories = $rootScope.memories;
  });

  request2.error(function (data) {
    console.log(data);
  });

  viewBucketlist.editGoal = function (name, desc, loc) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: loc
    };

    console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));
    $window.location.href = '#/edit-goal';
  };

  viewBucketlist.editMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    // console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));
    $window.location.href = '#/edit-memory';
  };

  viewBucketlist.finishGoal = function (name, desc, location) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: location
    };

    console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));
    $window.location.href = '#/create-memory';
  };

  viewBucketlist.viewMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    // console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));
    $window.location.href = '#/goal-completed';
  };

    viewBucketlist.deleteBucketlist = function () {
      // console.log($scope.myBucketlist);

      var request = $http.post('/deleteBucketlist', $scope.myBucketlist);

      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });

      $window.location.href = '#/user-dashboard';
    };

  viewBucketlist.deleteGoal = function (name, desc, location) {
    $rootScope.currGoal = {
      name: name,
      desc: desc,
      location: location
    };

    // console.log($rootScope.currGoal);
    localStorage.setItem("currGoal", JSON.stringify($rootScope.currGoal));

    var request = $http.post('/deleteGoal', $rootScope.currGoal);

    request.success(function (data) {
      console.log(data);
    });

    request.error(function (data) {
      console.log(data);
    });

    $window.location.href = '#/view-all-bucketlists';
  };

  viewBucketlist.deleteMemory = function (name, members, desc, location) {
    $rootScope.currMemory = {
      name: name,
      members: members,
      desc: desc,
      location: location
    };

    // console.log($rootScope.currMemory);
    localStorage.setItem("currMemory", JSON.stringify($rootScope.currMemory));

    var request = $http.post('/deleteMemory', $rootScope.currMemory);

    request.success(function (data) {
      console.log(data);
    });

    request.error(function (data) {
      console.log(data);
    });

    $window.location.href = '#/view-all-bucketlists';
  };

  viewBucketlist.getMapLocation = function () {
    // console.log('hey this is where we get our loc');

    //Set up a click handler
    OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
      defaultHandlerOptions: {
        'single': true,
        'double': false,
        'pixelTolerance': 0,
        'stopSingle': false,
        'stopDouble': false
      },

      initialize: function(options) {
        this.handlerOptions = OpenLayers.Util.extend(
          {}, this.defaultHandlerOptions
        );
        OpenLayers.Control.prototype.initialize.apply(
          this, arguments
        );
        this.handler = new OpenLayers.Handler.Click(
          this, {
            'click': this.trigger
          }, this.handlerOptions
        );
      },

      trigger: function(e) {
        //A click happened!
        var lonlat = map.getLonLatFromViewPortPx(e.xy)

        lonlat.transform(
          new OpenLayers.Projection("EPSG:900913"),
          new OpenLayers.Projection("EPSG:4326")
        );

        alert("You clicked near " + lonlat.lat + " N, " +
          + lonlat.lon + " E");

        if(37 > lonlat.lat && lonlat.lat > -33 && lonlat.lon > -16 && lonlat.lon < 50) {
          location = 'Africa';
          console.log(location);
        } else if(12 > lonlat.lat && lonlat.lat > -54 && lonlat.lon > -81 && lonlat.lon < -36) {
          location = 'South America';
          console.log(location);
        } else if(71 > lonlat.lat && lonlat.lat > 37 && lonlat.lon > -9 && lonlat.lon < 28) {
          location = 'Europe';
          console.log(location);
        } else if(83 > lonlat.lat && lonlat.lat > 60 && lonlat.lon > -72 && lonlat.lon < -13) {
          location = 'Europe2';
          console.log(location);
        } else if(80 > lonlat.lat && lonlat.lat > 76 && lonlat.lon > 10 && lonlat.lon < 27) {
          location = 'Europe3';
          console.log(location);
        } else if(-11 > lonlat.lat && lonlat.lat > -38 && lonlat.lon > 112 && lonlat.lon < 153) {
          location = 'Austrailia';
          console.log(location);
        } else if(-35 > lonlat.lat && lonlat.lat > -46 && lonlat.lon > 166 && lonlat.lon < 177) {
          location = 'Austrailia2';
          console.log(location);
        } else if(-66 > lonlat.lat && lonlat.lat > -85) {
          location = 'Antarctica';
          console.log(location);
        } else if( 77 > lonlat.lat && lonlat.lat > 9 && lonlat.lon > 34 && lonlat.lon < 178) {
          location = 'Asia';
          console.log(location);
        } else if(80 > lonlat.lat && lonlat.lat > 49 && lonlat.lon > -140 && lonlat.lon < -61) {
          location = 'Canada';
          console.log(location);
        } else if(30 > lonlat.lat && lonlat.lat > 8 && lonlat.lon > -114 && lonlat.lon < -87) {
          location = 'Central America & Mexico';
          console.log(location);
        } else if(49 > lonlat.lat && lonlat.lat > 30 && lonlat.lon > -124 && lonlat.lon < -67) {
          location = 'United States';
          console.log(location);
        } else {
          location = 'Ocean';
          console.log(location);
        }
      }
    });
  };
  var map;
  var mapCreated = false;
  viewBucketlist.init = function (){
    // console.log('CUM HERE: '+mapCreated);
    if(mapCreated) {
      // console.log('map alrdy create');
    } else {
      map = new OpenLayers.Map('mapdiv');

      map.addLayer(new OpenLayers.Layer.OSM());
      map.zoomToMaxExtent();

      var click = new OpenLayers.Control.Click();
      map.addControl(click);
      click.activate();
      mapCreated = true;
    }
  };
  });
