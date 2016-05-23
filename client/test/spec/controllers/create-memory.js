'use strict';

describe('Controller: CreateMemoryCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CreateMemoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateMemoryCtrl = $controller('CreateMemoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateMemoryCtrl.awesomeThings.length).toBe(3);
  });
});
