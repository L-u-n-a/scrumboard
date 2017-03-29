/* global app */
app.controller('loginController', function ($scope, $location, $cookies) {
  $scope.username = ''
  $scope.password = ''
  $scope.users = [
    { username: 'frank', password: 'test' },
    { username: 'Emilia', password: 'test' }
  ]
  $scope.hello = 'Hello!'

  $scope.checkPassword = function () {
    $scope.users.forEach(function (e, i) {
      console.log(e.username)
      if ($scope.username === e.username && $scope.password === e.password) {
        console.log('correct!')
        userCookie($scope.username)
        $location.path('/scrumboard')
      }
    })
  }

  function userCookie (username) {
    // Setting a cookie
    $cookies.put('username', username)

    var username = $cookies.get('username')
    console.log(username)
  }
})
