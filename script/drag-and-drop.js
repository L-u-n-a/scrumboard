var draggedTask = 0;

function allowDrop (ev) {
  ev.preventDefault();
}

function drag (ev) {
  ev.dataTransfer.setData('text', ev.target.id);
  draggedTask = ev.target.id;
}

function drop (ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));

  // This code selects the scope by selecting the div the angular content is
  // beeing displayed in.
  /* global angular */
  var scope = angular.element(document.getElementById('content')).scope();

  // The ev.target.id is the ID of the column we are dropping the task into.
  scope.switchTaskColumn(draggedTask, parseInt(ev.target.id));
}
