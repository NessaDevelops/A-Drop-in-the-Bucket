'use strict';

describe('Controller: GoalCompletedCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var GoalCompletedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalCompletedCtrl = $controller('GoalCompletedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalCompletedCtrl.awesomeThings.length).toBe(3);
  });
});
