'use strict';

describe('Controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('cafeApp'));

  var DetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('DetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of data to the scope', function () {
    expect(DetailCtrl.data11.length).toBe(1);
  });
});
