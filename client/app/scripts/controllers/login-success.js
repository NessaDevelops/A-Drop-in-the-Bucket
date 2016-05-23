'use strict';

angular.module('clientApp')
  .controller('LoginSuccessCtrl', function ($window, $timeout) {

    document.body.style.backgroundImage = "url('../../images/LoginBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    Ctrl();

    function Ctrl() {
      $timeout(function()
      {
        $window.location.href = '#/user-dashboard';
      }, 5000);
    }
  });
