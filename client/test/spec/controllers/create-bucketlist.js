'use strict';

describe('Controller: CreateBucketlistCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CreateBucketlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateBucketlistCtrl = $controller('CreateBucketlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateBucketlistCtrl.awesomeThings.length).toBe(3);
  });
});
