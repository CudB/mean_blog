'use strict';

describe('Controller: PostAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PostAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostAddCtrl = $controller('PostAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostAddCtrl.awesomeThings.length).toBe(3);
  });
});
