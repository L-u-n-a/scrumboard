/* global angular */
var module = angular.module('helloApp', [])

module.controller('helloController', function ($scope) {
  $scope.columns = []

  // This is where column information is stored. e.g: ToDo, In Progress, etc.
  $scope.saveNewColumn = function () {
    if (!isEmpty($scope.newColumn.name)) {
      $scope.columns.push({
        title: $scope.newColumn.name,
        // This array will be filled with the tasks in this column.
        tasks: []
      })

      $scope.newColumn = {}
    }
  }

  // Save a new item to a column.
  $scope.saveNewColumnItem = function (column) {
    if (!isEmpty($scope.newColumn.ItemName) && !isEmpty($scope.newColumn.ItemBody)) {
      column.tasks.push({
        name: $scope.newColumn.ItemName,
        body: $scope.newColumn.ItemBody
      })

      $scope.newColumn.ItemName = $scope.newColumn.ItemBody = null
    }
  }

  // This function will return true if a value is null or empty.
  function isEmpty (value) {
    return (value == null || value.length === 0)
  }
})
