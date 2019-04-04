function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.getAttribute("id"));
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var item = document.getElementById(data);
  if (item) {
    todoStates.moveItemToOtherPanel(
      item.parentElement.id,
      e.target.id,
      item.id
    );
    e.target.appendChild(item);
    writeDataToLocalStorage();
  } else {
    console.error("Cannot find element, event:", e);
  }
}
