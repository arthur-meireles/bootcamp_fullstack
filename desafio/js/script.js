window.addEventListener("load", start);

var globalNames = ["Eduardo Johnson", "João Vitor", "João Guilherme", "Laurrane Maira Ferreira"];
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
    render();
    
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

//RENDERIZAR ARRAY NA LISTA
function render() {
    var table = document.querySelector("table");
    table.innerHTML = '<th class="theader">Contatos</th><th class="theader">Ações</th>';

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var tr = document.createElement("tr");
    var td2 = document.createElement("td");
    var btn = document.createElement("button");
    btn.textContent = "X";
    var td = document.createElement("td");
    var textInside = document.createTextNode(currentName);

    tr.appendChild(td);
    tr.appendChild(td2);
    td2.appendChild(btn);
    td.appendChild(textInside);
    table.appendChild(tr);
  }
  clearInput();
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}

