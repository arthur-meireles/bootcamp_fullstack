window.addEventListener("load", start);

var globalNames = ["name", "name2", "name3"];
var inputName = null;

//Carrega eventos no start da pagina
function start() {
  inputName = document.querySelector("#name");

  preventFormSubmit();
  activateInput();
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
  function handleTyping(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  }

  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}
