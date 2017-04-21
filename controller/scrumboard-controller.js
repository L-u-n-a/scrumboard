/* global angular */
angular.module('scrumboard-app').controller('scrumboardController', function ($scope, $cookies, columnFactory, taskFactory, projectFactory, userService) {
  // The cookie data is neccecary in order to retrieve all of the selected projects information.
  $scope.username = $cookies.get('username')
  var projectID = $cookies.get('projectID')
  // Set data that is needed to make the filter for adding more project memebers work.
  $scope.project = projectFactory.getProjectById(projectID)
  $scope.projectParticipants = setParticipants($scope.project)
  // Retrieve the columns belonging to this project.
  $scope.columns = columnFactory.getColumnByProject(projectID)
  $scope.columns.tasks = setTasks()
  // This attribute is filled when not all input fields are filled in when creating a task.
  $scope.warning = ''
  $scope.sprints = []
  $scope.newColumn = {}
  // The newTask object with all of it's attributes is initialised.
  $scope.newTask = {}
  $scope.newTask.ItemName = ''
  $scope.newTask.ItenBody = ''
  $scope.newTask.ItemSprint = ''
  $scope.test = 'hello'
  console.log(taskFactory.getAllTasks());

  /* The columnFactory is called in order to create a new column.
     After the column has been created, the $scope.clumns list is filled again,
     so it includes the new list. newColumn model is made empty so the textfield
     is empty aswell. */
  $scope.saveNewColumn = function () {
    if (!isEmpty($scope.newColumn.name)) {
      columnFactory.createColumn(projectID, $scope.newColumn.name)
      $scope.columns = columnFactory.getColumnByProject(projectID)

      $scope.newColumn = {}
    }
  }

  /* A task is created using the ticketFactory.
    If not all fields are filled, a warning message is displayed.
    After creating the new task, the column.tasks list is refreshed.
  */
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

  /* TO BE IMPLEMENTED---
    Het moet mogelijk zijn tickets aan te passen. */
  $scope.editItem = function (column, item) {

  }

  // Every task is part of a sprint.
  $scope.saveNewSprint = function () {
    if (!isEmpty($scope.newSprint.name)) {
      $scope.project.sprints.push($scope.newSprint.name)
      localStorage.setItem('projects', JSON.stringify(projectFactory.getAllProjects()))

      $scope.newSprint.name = null
    }
  }

  // This method is called in order to link a task to a different column after a drag and drop.
  $scope.switchTaskColumn = function (taskName, columnID) {
    var task = taskFactory.getTaskByName(taskName);
    task.columnID = columnID;

    localStorage.setItem('tasks', JSON.stringify(taskFactory.getAllTasks()));
  }

  // Add a user to the project.
  $scope.addProjectMember = function (username) {
    $scope.project.participants.push(username)
  }

  // This is where the #id necessary to open the model is created.
  $scope.setTitle = function () {
    return '#' + $scope.name
  }

  // This function will return true if a value is null or empty.
  function isEmpty (value) {
    return (value == null || value.length === 0)
  }

  function setParticipants (project) {
    var list = []
    for (var i = 0; i < $scope.project.participants.length; i++) {
      list.push(project.participants[i])
    }
    return list
  }

  /* This function loopt through every column and fills it with the tasks assigned to it. */
  function setTasks () {
    $scope.columns.forEach(function (e) {
      e.tasks = taskFactory.getTaskByColumn(e.id)
    })
  }
})
