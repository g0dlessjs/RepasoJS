// Seccion 9 - Funciones - Function Declaration

function sumar() {
  return 1 + 2;
}

console.log(sumar());

//  9.1 - Funciones - Parametros y parametros por default

function restar(num1, num2) {
  console.log(num1 - num2);
}

restar(10, 20);

//  9.2 - Funciones que retornan valores

function sumarDos(numero1, numero2) {
  //   return numero1 + numero2;
  //   return [numero1 + numero2, "Test"];
  return {
    result: numero1 + numero2,
    mensaje: "Test",
  };
}

const { result, mensaje } = sumarDos(10, 30);
console.log(result, mensaje);

// 9.3 Function Expression

// function declaration
// Se puede llamar antes de declarar y funciona!
function restar(num1, num2) {
  console.log(num1 - num2);
}

// function expression
// No se puede mandar a llamar sin declararla por que dara un error
const sumarTest = function (num3, num4) {
  console.log(num3 + num4);
};

sumarTest(20, 50);

// 9.4 Funciones - Arrow Functions

const miFuncion = (test, n1, n2) => {
  return test, n1 + n2;
};

const resultado = miFuncion("holi", 10, 5);
console.log(resultado);

// 9.5 Arrow function y Array Methods

const tecnologias = ["React", "Node", "Angular", "Vue", "HTML", "CSS"];

const newArray = tecnologias.map(function (tech) {
  if (tech === "HTML") {
    return "MongoDB";
  } else {
    return tech;
  }
});

const newArray2 = tecnologias.filter((tech) => tech !== "React");

console.log(newArray);
console.log(newArray2);
