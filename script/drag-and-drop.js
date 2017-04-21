function allowDrop (ev) {
  ev.preventDefault()

  // This selects the ID of the div the item is beeing dropped into.
  // The id of the div is the same as the ID of the list we want to put it in.
  console.log(ev.target.id);
}

function drag (ev) {
  ev.dataTransfer.setData('text', ev.target.id)

  // Dit is de ID van de task die we willen verplaatsen.
  console.log(ev.target.id);
}

function drop (ev) {
  ev.preventDefault()
  var data = ev.dataTransfer.getData('text')
  ev.target.appendChild(document.getElementById(data))
}
