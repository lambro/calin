'use strict';

describe('Controller: TheTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('calinApp'));

  var TheTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheTeamCtrl = $controller('TheTeamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TheTeamCtrl.awesomeThings.length).toBe(3);
  });
});
