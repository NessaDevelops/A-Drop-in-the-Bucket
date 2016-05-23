'use strict';

describe('Controller: AchievementsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AchievementsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AchievementsCtrl = $controller('AchievementsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AchievementsCtrl.awesomeThings.length).toBe(3);
  });
});
