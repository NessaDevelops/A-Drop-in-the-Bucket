'use strict';

describe('Controller: ViewMemoryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ViewMemoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewMemoryCtrl = $controller('ViewMemoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewMemoryCtrl.awesomeThings.length).toBe(3);
  });
});
