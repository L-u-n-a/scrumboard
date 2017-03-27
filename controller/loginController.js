/* global app */
app.controller('loginController', function ($scope) {
  $scope.username = ''
  $scope.password = ''
  $scope.users = [{
    username: 'frank',
    password: 'test'
  }]

  $scope.checkPassword = function (username, password) {
    for (var user in $scope.users) {
      if (username === user.username && password === user.password) {
        console.log('Login succesful')
      }
    }
  }
})
