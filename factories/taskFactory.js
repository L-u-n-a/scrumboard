/* global app */
app.factory('taskFactory', function () {
  var tasks = [
    {id: 1, columnID: 1, name: 'Task name', body: 'Task description', sprint: 'sprint 1'}
  ]

  tasks = JSON.parse(localStorage.getItem('tasks'))

  function getAllTasks () {
    return tasks
  }

  function getTaskByColumn (id) {
    var taskList = []
    tasks.forEach(function (e) {
      if (e.columnID === id) {
        taskList.push(e)
      }
    })
    return taskList
  }

  function createTask (taskColumnID, taskName, taskBody, taskSprint) {
    tasks.push({id: tasks.length + 1, columnID: taskColumnID, name: taskName, body: taskBody, sprint: taskSprint})
    /* global localStorage */
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  return {
    getAllTasks: getAllTasks,
    createTask: createTask,
    getTaskByColumn: getTaskByColumn
  }
})
