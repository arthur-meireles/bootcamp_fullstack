window.addEventListener("load", start);

var globalNames = [
  "Eduardo Johnson",
  "João Vitor",
  "João Guilherme",
  "Laurrane Maira Ferreira",
];
var inputName = null;
var isEditing = false;
var currentIndex = null;

//Carrega eventos no start da pagina
function start() {
  inputName = document.querySelector("#name");
  preventFormSubmit();
  activateInput();
  render();
}

//Tratando vazio

//Previne o reload da tecla 'enter'
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

//Funcao que captura escrita e da foco ao campo
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }
  function handleTyping(event) {
    //Validacao espaco em branco
    var hasText = !!event.target.value && event.target.value.trim() !== "";
    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === "Enter") {
      if (isEditing === true) {
        updateName(event.target.value);
      } else {
        var typedName = event.target.value;
        insertName(typedName);
      }
      isEditing = false;
      clearInput();
      render();
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

  //Criando table-row com td dentro e botão
  function createTr(currentName, index) {
    //Criando Botao de Delete
    function createDeleteButton() {
      function deleteName() {
        globalNames.splice(index, 1);
        render();
      }
      var span = document.createElement("span");
      var td2 = document.createElement("td");
      span.innerHTML = '<span class="material-icons">delete_forever</span>';
      td2.appendChild(span);
      tr.appendChild(td2);

      span.addEventListener("click", deleteName);
    }

    //tornando editavel
    function editItem() {
      inputName.value = currentName;
      isEditing = true;
      currentIndex = index;
      inputName.focus();
    }

    //Montando Lista
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var name = document.createTextNode(currentName);
    td.addEventListener("click", editItem); // Adicionando evento ao elemento td

    td.appendChild(name); // td escreve o name dentro
    tr.appendChild(td); //tr monta um td dentro
    createDeleteButton(); //Funcao escreve o botao (recebe elemento pai)
    table.appendChild(tr); // table monta o tr dentro
  }

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    //Montando lista
    createTr(currentName, i);
  }
  clearInput();
}

function clearInput() {
  inputName.value = "";
  inputName.focus();
}
