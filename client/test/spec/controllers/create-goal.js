'use strict';

describe('Controller: CreateGoalCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CreateGoalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateGoalCtrl = $controller('CreateGoalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateGoalCtrl.awesomeThings.length).toBe(3);
  });
});
