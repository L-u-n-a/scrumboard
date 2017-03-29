/* global app */
app.controller('loginController', function ($scope, $location, $cookies, userService) {
  $scope.username = ''
  $scope.password = ''

  $scope.checkPassword = function () {
    if (userService.login($scope.username, $scope.password)) {
      console.log('correct!')
      userCookie($scope.username)
      $location.path('/scrumboard')
    }
  }

  function userCookie (username) {
    // Setting a cookie
    $cookies.put('username', username)

    var username = $cookies.get('username')
    console.log(username)
  }
})
