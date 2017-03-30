/* global app */
app.controller('scrumboardController', function ($scope, $cookies, columnFactory, taskFactory) {
  $scope.username = $cookies.get('username')
  var projectID = $cookies.get('projectID')
  $scope.columns = columnFactory.getColumnByProject(projectID)
  $scope.sprints = []
  $scope.warning = ''
  $scope.newTask = {}
  $scope.newColumn = {}
  $scope.newTask.ItemName = ''
  $scope.newTask.ItenBody = ''
  $scope.newTask.ItemSprint = ''

  // This is where column information is stored. e.g: ToDo, In Progress, etc.
  $scope.saveNewColumn = function () {
    if (!isEmpty($scope.newColumn.name)) {
      columnFactory.createColumn(projectID, $scope.newColumn.name)
      $scope.columns = columnFactory.getColumnByProject(projectID)

      $scope.newColumn = {}
    }
  }

  // Save a new item to a column.
  $scope.saveNewColumnItem = function (column) {
    if (!isEmpty($scope.newTask.ItemName) && !isEmpty($scope.newTask.ItemBody) && !isEmpty($scope.newTask.ItemSprint)) {
      taskFactory.createTask(column.id, $scope.newTask.ItemName, $scope.newTask.ItemBody, $scope.newTask.ItemSprint)
      column.tasks = taskFactory.getTaskByColumn(column.id)
      $scope.warning = ''

      $scope.newTask.ItemName = $scope.newTask.ItemBody = null
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
    return '#' + $scope.name
  }

  // This function will return true if a value is null or empty.
  function isEmpty (value) {
    return (value == null || value.length === 0)
  }
})
