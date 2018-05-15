var addList = document.getElementsByClassName("addlist")[0];
var newList = document.getElementById("newlist");

newList.addEventListener('click', function(){
  addList.className = "new";
  var saveButton = document.createElement("button");
  var cancelButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.className = "save";
  cancelButton.type = "button";
  cancelButton.className = "close"
  addList.appendChild(saveButton);
  addList.appendChild(cancelButton);
  saveButton.appendChild(document.createTextNode ("Guardar"));
  cancelButton.innerHTML = "&times;"
});
