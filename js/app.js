var addList = document.getElementById("addlist");
var newList = document.getElementById("newlist");
var saveButton = document.createElement("button");
var cancelButton = document.createElement("button");

/*Funcion para crear los botones para anadir una lista */

function createButton(e){
  var conteinerList = document.createElement("div");
  conteinerList.className= "new";
  saveButton.type = "button";
  saveButton.className = "save";
  cancelButton.type = "button";
  cancelButton.className = "close"
  addList.appendChild(conteinerList)
  conteinerList.appendChild(newList)
  conteinerList.appendChild(saveButton);
  conteinerList.appendChild(cancelButton);
  saveButton.appendChild(document.createTextNode ("Guardar"));
  cancelButton.innerHTML = "&times;" 
  newList.removeEventListener("click",createButton);
};

newList.addEventListener('click',createButton);

var newTaskBoard = document.getElementById("task-board");

/* Funcion para agregar tarjetas a una lista*/

function addTaskBoard(e){
  var nameTaskBoard = document.getElementById("newlist").value;
  document.getElementById("newlist").value = "";
  var conteinerTask = document.createElement("div");
  var tittleTaskBoard = document.createElement("h4");
  var addTask = document.createElement("a");
  addTask.href = "#";
  conteinerTask.className = "inline";
  tittleTaskBoard.appendChild(document.createTextNode(nameTaskBoard));
  newTaskBoard.appendChild(conteinerTask);
  conteinerTask.appendChild(tittleTaskBoard);
  conteinerTask.appendChild(addTask);
  addTask.appendChild(document.createTextNode("Añadir una tarjeta..."))
}

saveButton.addEventListener("click", addTaskBoard);


