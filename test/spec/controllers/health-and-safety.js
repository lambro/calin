'use strict';

describe('Controller: HealthAndSafetyCtrl', function () {

  // load the controller's module
  beforeEach(module('calinApp'));

  var HealthAndSafetyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthAndSafetyCtrl = $controller('HealthAndSafetyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HealthAndSafetyCtrl.awesomeThings.length).toBe(3);
  });
});
