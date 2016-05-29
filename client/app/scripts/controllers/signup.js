'use strict';

angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/SignupBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    var user,
      signup;

    $scope.signup = signup = {};

    signup.user = user = {};

    signup.submit = function () {

      if (
        !user.username ||
        !user.email ||
        !user.password1 ||
        !user.password2
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      if (user.password1 !== user.password2) {
        alert('Your passwords must match.');
        return false;
      }

      console.log(user);

      var request = $http.post('/signup', user);

      request.success(function (data) {
        console.log(data);

        var request2 = $http.post('/addAchievements', user);

        request2.success(function (data) {
          console.log(data);
        });

        request2.error(function (data) {
          console.log(data);
        });

        $window.location.href = '#/signup-success';
        console.log('here2');
      });

      request.error(function (data) {
        console.log(data);
        console.log('there2');
      })
    };
  });
