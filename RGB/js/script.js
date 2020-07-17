//Evento que captura o load da pagina
window.addEventListener("load", start);

//GLOBAL VARIABLES
var range = null;
var number = null;
var square = null;

//Carrega eventos no start da pagina
function start() {
  range = document.querySelectorAll(".range");
  number = document.querySelectorAll(".number");
  square = document.querySelector(".square");
  square.style.backgroundColor = "#fff";

  //Funções
  colorfy();
}

function colorfy() {

  //Captura valor do range
  function writeValue() {
    for (var i = 0; i < range.length; i++) {
      number[i].value = range[i].value;
    }

    function handleColor() {
      var color = `rgb(${number[0].value}, ${number[1].value}, ${number[2].value})`;
      var shadow = `0px 0px 79px 10px rgba(${number[0].value}, ${number[1].value}, ${number[2].value}, 1)`;
      square.style.backgroundColor = color;
      square.style.boxShadow = shadow;
    }
    handleColor();
  }

  for (var i = 0; i < range.length; i++) {
    range[i].addEventListener("input", writeValue);
  }
}
