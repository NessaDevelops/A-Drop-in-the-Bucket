'use strict';

describe('Controller: EditBucketlistCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var EditBucketlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditBucketlistCtrl = $controller('EditBucketlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditBucketlistCtrl.awesomeThings.length).toBe(3);
  });
});
