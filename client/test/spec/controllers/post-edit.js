'use strict';

describe('Controller: PostEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PostEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostEditCtrl = $controller('PostEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostEditCtrl.awesomeThings.length).toBe(3);
  });
});
