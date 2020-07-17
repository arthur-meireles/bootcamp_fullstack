//Evento que captura o load da pagina
window.addEventListener("load", start);

//GLOBAL VARIABLES
var range = null;
var number = null;

//Carrega eventos no start da pagina
function start() {
  range = document.querySelectorAll(".range");

  number = document.querySelectorAll(".number");

  //Funções
  writeValue();
}

function writeValue() {


  function handleValue(event) {
    console.log(event);
    for(var i = 0; i < range.length; i++){
      number[i].value = range[i].value;
      console.log(number[i].value);
    }
  
  }

  for (var i = 0; i < range.length; i++) {
    range[i].addEventListener("change", handleValue);
  }

}
