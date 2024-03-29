'use strict';

describe('Controller: BrowseBucketlistsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BrowseBucketlistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrowseBucketlistsCtrl = $controller('BrowseBucketlistsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrowseBucketlistsCtrl.awesomeThings.length).toBe(3);
  });
});
