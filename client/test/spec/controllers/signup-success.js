'use strict';

describe('Controller: SignupSuccessCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SignupSuccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupSuccessCtrl = $controller('SignupSuccessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignupSuccessCtrl.awesomeThings.length).toBe(3);
  });
});
