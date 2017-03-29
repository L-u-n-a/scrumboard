/* global app */
app.controller('homeController', function ($scope, $location, $cookies, projectFactory, userService) {
  $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))
  $scope.users = userService.getUserNames()
  $scope.newProject = {}
  $scope.newProject.name = ''
  $scope.newProject.group = []

  $scope.saveNewProject = function () {
    projectFactory.createProject($scope.newProject.name, [$scope.newProject.group, $cookies.get('username')])
    $scope.projects = projectFactory.getProjectsByUser($cookies.get('username'))
    console.log(projectFactory.getAllProjects())
    $scope.newProject.name = ''
    $scope.newProject.group = []
  }

  $scope.setProjectID = function (id) {
    $cookies.put('projectID', id)
  }
})
