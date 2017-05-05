/* global app */
app.controller('homeController', function ($scope, $http, $location, $cookies, projectFactory, userService, databaseService) {
  $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))
  $scope.users = userService.getUserNames()
  $scope.newProject = {}
  $scope.newProject.name = ''
  $scope.newProject.group = []

  $scope.saveNewProject = function () {
    projectFactory.createProject($scope.newProject.name, [$cookies.get('username')])
    $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))

    // Call function in the databaseService to store project in our database.
    databaseService.newProject($scope.newProject.name)

    $scope.newProject.name = ''
    $scope.newProject.group = []
  }

  $scope.setProjectID = function (id) {
    $cookies.put('projectID', id)
  }
})
