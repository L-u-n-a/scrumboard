/* global app */
app.factory('columnFactory', function () {
  var columns = [
    {id: 1, projectID: 1, name: 'ToDo', tasks: []}
  ]

  columns = JSON.parse(localStorage.getItem('columns'))

  function getAllColumns () {
    return columns
  }

  function getColumnByProject (id) {
    var columnList = []
    columns.forEach(function (e) {
      if (e.projectID === id) {
        columnList.push(e)
      }
    })
    return columnList
  }

  function createColumn (projectId, columnName) {
    columns.push({id: columns.length + 1, projectID: projectId, name: columnName, tasks: []})
    /* global localStorage */
    localStorage.setItem('columns', JSON.stringify(columns))
  }

  function saveColumns () {
    localStorage.setItem('columns', JSON.stringify(columns))
    columns = columns = JSON.parse(localStorage.getItem('columns'))
  }

  return {
    getAllColumns: getAllColumns,
    createColumn: createColumn,
    getColumnByProject: getColumnByProject,
    saveColumns: saveColumns
  }
})
