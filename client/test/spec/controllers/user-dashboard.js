'use strict';

describe('Controller: UserDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDashboardCtrl = $controller('UserDashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserDashboardCtrl.awesomeThings.length).toBe(3);
  });
});
