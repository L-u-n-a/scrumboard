var draggedTask = 0;

function allowDrop (ev) {
  ev.preventDefault()

  // This selects the ID of the div the item is beeing dropped into.
  // The id of the div is the same as the ID of the list we want to put it in.
  // console.log(ev.target.id);
}

function drag (ev) {
  ev.dataTransfer.setData('text', ev.target.id)
  draggedTask = ev.target.id;
}

function drop (ev) {
  ev.preventDefault()
  var data = ev.dataTransfer.getData('text')
  ev.target.appendChild(document.getElementById(data))

  // Currently, this fucntion is not within scope, and cannot be used.
  var scope = angular.element(document.getElementById('content')).scope();
  scope.switchTaskColumn(draggedTask, parseInt(ev.target.id));
}
