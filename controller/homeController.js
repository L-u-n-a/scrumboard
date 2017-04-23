/* global app */
app.controller('homeController', function ($scope, $http, $location, $cookies, projectFactory, userService) {
  $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))
  $scope.users = userService.getUserNames()
  $scope.newProject = {}
  $scope.newProject.name = ''
  $scope.newProject.group = []

  $scope.saveNewProject = function () {
    projectFactory.createProject($scope.newProject.name, [$cookies.get('username')])
    $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))

    $http.post('php/crud-project.php?name=' + $scope.newProject.name)
    .then(function mySucces (response) {

    }, function myError (response) {
      console.log(response.statusText)
    })

    $scope.newProject.name = ''
    $scope.newProject.group = []
  }

  $scope.setProjectID = function (id) {
    $cookies.put('projectID', id)
  }
})
