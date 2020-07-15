window.addEventListener("load", start);

var globalNames = [
  "Eduardo Johnson",
  "João Vitor",
  "João Guilherme",
  "Laurrane Maira Ferreira",
];
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
  table.innerHTML =
    '<th class="theader">Contatos</th><th class="theader">Ações</th>';

  //Criando Botao
  function createButton(tr) {
    var td = document.createElement("td");
    var span = document.createElement("span");
    span.innerHTML = '<span class="material-icons">delete_forever</span>';
    td.appendChild(span);
    tr.appendChild(td);
  }

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var name = document.createTextNode(currentName);

    //Montando Lista
    tr.appendChild(td); //tr monta um td dentro
    td.appendChild(name); // td escreve o name dentro
    createButton(tr); //Funcao escreve o botao (recebe elemento pai)
    table.appendChild(tr); // table monta o tr dentro
  }
  clearInput();
}

function clearInput() {
  inputName.value = "";
  inputName.focus();
}
