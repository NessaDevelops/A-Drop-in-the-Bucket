'use strict';

describe('Controller: LoginSuccessCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LoginSuccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginSuccessCtrl = $controller('LoginSuccessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginSuccessCtrl.awesomeThings.length).toBe(3);
  });
});
