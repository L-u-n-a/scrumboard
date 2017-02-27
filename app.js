var module = angular.module('helloApp', [])

module.controller('helloController', function ($scope) {

  $scope.columns = []

  $scope.saveNewColumn = function () {
    if($scope.newColumn.name != null) {
      $scope.columns.push({
        title: $scope.newColumn.name
      })

      $scope.newColumn = {}
    }
  }

  $scope.saveNewColumnItem = function () {

  }
})
