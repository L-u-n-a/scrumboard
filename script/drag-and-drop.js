function allowDrop (ev) {
  ev.preventDefault()
}

function drag (ev) {
  ev.dataTransfer.setData('text', ev.target.id)
}

function drop (task) {
  task.preventDefault()
  var data = task.dataTransfer.getData('text')
  task.target.appendChild(document.getElementById(data))
}

function findColumn (task) {
  var addItem = -1
  $scope.column.forEach(function (e, i) {
    if (e.name === task.name) {
      addItem = i
      return addItem
    }
  })
}
