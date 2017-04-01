/* global describe */
describe('Controller: scrumboardController', function () {
    // load the controller's module
    /* global beforeEach */
  //beforeEach(module('scrumboard-app'))
  var scrumboardController,
    scope

   // Initialize the controller and a mock scope
   /* global inject */
   beforeEach(inject(function ($rootScope, $controller, _$location_) {
         $location = _$location_;
         scope = $rootScope.$new();

         createController = function() {
             return $controller('scrumboardController', {
                 '$scope': scope
             });
         };
     }));

  /* global it */
  it('should check to see if a "#" is added to a title', function () {
    var input = 'test'
    var output = '#test'
    scrumboardController = createController();
    console.log(scrumboardController)

    /* global expect */
    expect(scrumboardController.setTitle(input)).toBe(output)
  })
})

/* global describe */
describe('Test the testing', function () {
  /* global it */
  it('Should execute with succes', function () {
    /* global expect */
    expect(true).toBeTruthy()
  })

  it('Should execute with failure', function () {
    expect(true).not.toBe(false)
  })
})
