'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupSuccessCtrl
 * @description
 * # SignupSuccessCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupSuccessCtrl', function ($window, $timeout) {

    document.body.style.backgroundImage = "url('../../images/SignupBkgrnd.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  Ctrl();

  function Ctrl() {
    $timeout(function()
    {
      $window.location.href = '#/login';
    }, 5000);
  }
  });
