window.addEventListener("load", start);

var globalNames = ["Eduardo Johnson", "João Vitor", "João Guilherme"];
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
    render()
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

    table.removeAttribute("tr");

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var textInside = document.createTextNode(currentName);

    tr.appendChild(td);
    td.appendChild(textInside);
    table.appendChild(tr);
  }
}

