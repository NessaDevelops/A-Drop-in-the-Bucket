'use strict';

describe('Controller: ViewAllBucketlistsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ViewAllBucketlistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewAllBucketlistsCtrl = $controller('ViewAllBucketlistsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewAllBucketlistsCtrl.awesomeThings.length).toBe(3);
  });
});
