'use strict';

app.controller('LoginCtrl', function ($scope, $http, $window) {

    document.body.style.backgroundImage = "url('../../images/LoginBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var user, login;

    $scope.login = login = {};

    login.user = user = {};

    login.submit = function () {
      if (
        !user.email ||
        !user.password
      ) {
        alert('Please fill out all the form fields.');
        return false;
      }

      var request = $http.post('/login', user);

      request.success(function (data) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("user", JSON.stringify(data.getUser));

        console.log("Logged in status: " + localStorage.getItem("loggedIn"));
        console.log(data.message);
        console.log(data.getUser);

        $window.location.href = '#/login-success';

      });

      request.error(function (data) {
        console.log("Logged in status: " + localStorage.getItem("loggedIn"));
        console.log(data);
      })

    };

  });
