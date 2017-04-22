var draggedTask = 0;

function allowDrop (ev) {
  ev.preventDefault();
}

function drag (ev) {
  ev.dataTransfer.setData('text', ev.target.id);
  draggedTask = ev.target.id;
}

function drop (ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');

  // This ensures the task cannot be dropped into another task.
  el.appendChild(document.getElementById(data));

  // This code selects the scope by selecting the div the angular content is
  // beeing displayed in.
  /* global angular */
  var scope = angular.element(document.getElementById('content')).scope();

  // The ev.target.id is the ID of the column we are dropping the task into.
  scope.switchTaskColumn(draggedTask, parseInt(ev.target.id));
}

function preventDrop (ev) {
  if(ev.target.tagName === 'P' || ev.target.tagName === 'A' || ev.target.tagName === 'H4') {
    ev.preventDefault();
  }
}
