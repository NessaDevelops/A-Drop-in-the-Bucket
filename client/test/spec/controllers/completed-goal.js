'use strict';

describe('Controller: CompletedGoalCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CompletedGoalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompletedGoalCtrl = $controller('CompletedGoalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompletedGoalCtrl.awesomeThings.length).toBe(3);
  });
});
