window.addEventListener("load", start);

var globalNames = ["name", "name2", "name3"];
var inputName = null;

//Carrega eventos no start da pagina
function start() {
  inputName = document.querySelector("#name");
  preventFormSubmit();
  activateInput();
  render();
}

//Previne o reload da tecla 'enter'
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

//Funcao que dá foco ao campo e captura escrita
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
  }

  function handleTyping(event) {
    if (event.key === "Enter") {
      var typedName = event.target.value;
      insertName(typedName);
    }
  }

  inputName.addEventListener("keyup", handleTyping);
  inputName.focus();
}
 function render() {
     var table = document.querySelector("table");
     var containerTr = document.createElement("tr");
     var containerTd = document.createElement("td");
    var textInside = document.createTextNode("Paulinho Cesar");

     containerTr.appendChild(containerTd);
     containerTd.appendChild(textInside);

     table.appendChild(containerTr);
 }





