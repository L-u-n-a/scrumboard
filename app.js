var module = angular.module('helloApp', [])

module.controller('helloController', function ($scope) {
  $scope.name = 'Gijs'

  $scope.columns = []

  $scope.saveNewColumn = function () {
    $scope.columns.push({
      title: $scope.newColumn.name
    })

    $scope.newColumn = {}
  }

  $scope.saveNewColumnItem = function () {

  }
})
