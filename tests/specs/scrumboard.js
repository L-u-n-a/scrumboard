'use strict';

// describe('Controller: scrumboardController', function () {
//
//   beforeEach(module('scrumboard-app'));
//
//   var scrumboardController,
//     scope;
//
//   beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     scrumboardController = $controller('scrumboardController', {
//       $scope: scope
//     })
//   }))
describe('Test the testing', function () {
  var userFilter, columnFactory
  beforeEach(function () {
    module('ngCookies')
    module('scrumboard-app')
    inject(function ($filter, _columnFactory_) {
      userFilter = $filter('userFilter')
      columnFactory = _columnFactory_
    })
  })
  it('Should create a new user', function () {
    expect(columnFactory.getAllColumns()).toBe(columnFactory.getAllColumns())
  })
})

//   /* global it */
//   it('should check to see if a "#" is added to a title', function () {
//     var input = 'test'
//     var output = '#test'
//
//     /* global expect */
//     console.log(scope.test)
//     expect(scrumboardController.test).toBe('hello')
//   })
// })
//
// /* global describe */
// describe('Test the testing', function () {
//   /* global it */
//   it('Should execute with succes', function () {
//     /* global expect */
//     expect(true).toBeTruthy()
//   })
//
//   it('Should execute with failure', function () {
//     expect(true).not.toBe(false)
//   })
// })
