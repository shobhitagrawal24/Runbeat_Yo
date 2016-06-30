'use strict';

describe('Component: ChallengeComponent', function () {

  // load the controller's module
  beforeEach(module('runBeatApp'));

  var ChallengeComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ChallengeComponent = $componentController('ChallengeComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
