'use strict';

describe('Controller: EditGoalCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EditGoalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditGoalCtrl = $controller('EditGoalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditGoalCtrl.awesomeThings.length).toBe(3);
  });
});
