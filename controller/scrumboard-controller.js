/* global app */
app.controller('scrumboardController', function ($scope, $cookies) {
  $scope.username = $cookies.get('username')
  $scope.columns = []
  $scope.sprints = []
  $scope.warning = ''

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
    if (!isEmpty($scope.newColumn.ItemName) && !isEmpty($scope.newColumn.ItemBody) && !isEmpty($scope.newColumn.ItemSprint)) {
      column.tasks.push({
        name: $scope.newColumn.ItemName,
        body: $scope.newColumn.ItemBody,
        sprint: $scope.newColumn.ItemSprint
      })
      $scope.warning = ''

      $scope.newColumn.ItemName = $scope.newColumn.ItemBody = null
    } else {
      $scope.warning = 'Please fill all fields!'
    }
  }

  /* Find the selected task by looping through the list of tasks of every column.
  When having found the correct location of the item inside the list, splice it. */
  $scope.deleteItem = function (column, task) {
    var deleteIndex = -1
    column.tasks.forEach(function (e, i) {
      if (e.name === task.name) {
        console.log(task.name)
        deleteIndex = i
        column.tasks.splice(deleteIndex, 1)
      }
    })
  }

  $scope.editItem = function (column, item) {

  }

  $scope.saveNewSprint = function () {
    if (!isEmpty($scope.newSprint.name)) {
      $scope.sprints.push({
        name: $scope.newSprint.name
      })

      $scope.newSprint.name = null
    }
  }

  // This is where the #id necessary to open the model is created.
  $scope.setTitle = function () {
    return '#' + $scope.newColumn.name
  }

  // This function will return true if a value is null or empty.
  function isEmpty (value) {
    return (value == null || value.length === 0)
  }
})
