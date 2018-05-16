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
  cancelButton.innerHTML = "&times;";
  newList.removeEventListener("click",createButton);
};

newList.addEventListener('click',createButton);

/* Funcion para agregar un nuevo cuadro donde estara el nombre de la nueva lista*/

var newTaskBoard = document.getElementById("task-board");

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

  var addButton = document.createElement("button");
  var closeButton = document.createElement("button");
  var newTarget = document.createElement("textarea");

  addTask.addEventListener("click", function(){
    
    newTarget.className = "newTarget";
    addButton.type = "button";
    addButton.id = "addButton";
    addButton.className = "save";
    closeButton.type = "button";
    closeButton.className = "close";
    conteinerTask.appendChild(newTarget);
    conteinerTask.appendChild(addButton)
    addButton.appendChild(document.createTextNode("Añadir"));
    conteinerTask.appendChild(closeButton);
    closeButton.innerHTML = "&times;" 
    newTarget.focus();
    addTask.style.display = "none";
  });

  addButton.addEventListener("click", function(){
    var target = newTarget.value;
    newTarget.value = "";
    var listTarget = document.createElement("div");
    listTarget.className = "targets";
    var aTarget = document.createElement('span');
    aTarget.className = "targets";
    conteinerTask.insertBefore(listTarget,newTarget);
    listTarget.appendChild(aTarget);
    aTarget.appendChild(document.createTextNode(target));
  });
}

saveButton.addEventListener("click", addTaskBoard);


