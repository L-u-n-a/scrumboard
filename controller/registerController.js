/* global app */
app.controller('registerController', function ($scope, $location, userService) {
  $scope.registerUsername = ''
  $scope.registerPassword = ''

  $scope.createUser = function () {
    if (!isEmpty($scope.registerUsername) && !isEmpty($scope.registerPassword)) {
      userService.createUser($scope.registerUsername, $scope.registerPassword)
      $location.path('/login')
    }
  }

  function isEmpty (value) {
    return (value == null || value.length === 0)
  }
})
