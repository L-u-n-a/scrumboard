/* global app */
app.factory('columnFactory', function () {
  var columns = [
    {id: 1, projectID: 1, name: 'ToDo', tasks: []}
  ]

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
    columns.push({id: columns.length + 1, projectID: projectId, name: columnName})
    /* global localStorage */
    localStorage.setItem('columns', JSON.stringify(columns))
  }

  return {
    getAllColumns: getAllColumns,
    createColumn: createColumn,
    getColumnByProject: getColumnByProject
  }
})
