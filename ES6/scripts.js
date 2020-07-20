"use strict"; // O JavaScript acusa mais erros

//Funcoes

function sum(a, b) {
  return a + b;
}

//funcao anonima
const sum2 = function (a, b) {
  return a + b;
};

//arrow function
const sum3 = (a, b) => {
  return a + b;
};

console.log(sum(1, 1));
console.log(sum2(1, 1));
console.log(sum3(1, 1));
