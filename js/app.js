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

/* Funcion para agregar un nuevo cuadro donde estara el nombre de la nueva lista*/

var newTaskBoard = document.getElementById("task-board");
//var addTask = document.createElement("a");
//addTask.setAttribute('class', 'addTarget');


function addTaskBoard(e){
  var nameTaskBoard = document.getElementById("newlist").value;
  document.getElementById("newlist").value = "";
  var addTask = document.createElement("a");
  var conteinerTask = document.createElement("div");
  var tittleTaskBoard = document.createElement("h4");
  addTask.setAttribute('class', 'addTarget');
  addTask.href = "#";
  conteinerTask.className = "inline";
  tittleTaskBoard.appendChild(document.createTextNode(nameTaskBoard));
  newTaskBoard.appendChild(conteinerTask);
  conteinerTask.appendChild(tittleTaskBoard);
  conteinerTask.appendChild(addTask);
  addTask.appendChild(document.createTextNode("Añadir una tarjeta..."));

  addTask.addEventListener("click", function(){
    var newTarget = document.createElement("textarea");
    newTarget.className = "newTarget";
    var addButton = document.createElement("button");
    var closeButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "save";
    closeButton.type = "button";
    closeButton.className = "close";
    conteinerTask.appendChild(newTarget);
    conteinerTask.appendChild(addButton)
    addButton.appendChild(document.createTextNode("Añadir"));
    conteinerTask.appendChild(closeButton);
    closeButton.innerHTML = "&times;" 
    addTask.style.display = "none";
    
  });



}

saveButton.addEventListener("click", addTaskBoard);


