'use strict';

describe('Controller: EditMemoryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EditMemoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditMemoryCtrl = $controller('EditMemoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditMemoryCtrl.awesomeThings.length).toBe(3);
  });
});
