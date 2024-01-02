// 13 - Selectores del DOM - querySelector
// Este metodo sirve para regresar maximo 1 elemento del DOM

const heading = document.querySelector("h2");

console.log(heading);
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.className);
console.log(heading.id);

// 13.1 - Selectores del DOM - querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
// Regresa toda las coincidencias segun el selector del DOM
console.log(enlaces);

// 13.2 Manipulacion HTML con JS

const heading2 = document.querySelector(".heading");
heading2.textContent = "Nuevo Heading";
console.log(heading2.textContent);

// const inputNombre = document.querySelector("#nombre");
// inputNombre.value = "Un valor por default";

const enlaces2 = document.querySelectorAll(".navegacion a");
enlaces2.forEach((enlace) => (enlace.textContent = "Enlace Advance"));

// 13.3 Eventos del DOM - CLick

const heading3 = document.querySelector(".heading");
heading3.addEventListener("click", function () {
  console.log("Diste click");
});

// const clickHeading = () => {
//   console.log("Disteclick");
// };

// heading3.addEventListener("click", clickHeading);
const enlaces3 = document.querySelectorAll(".navegacion a");

enlaces3.forEach((enlance) => {
  enlance.addEventListener("click", () => {
    console.log("Diste click en un enlace");
  });
});

// 13.4 Eventos del DOM - Inputs

// const inputNombre = document.querySelector(".nombre");
// inputNombre.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

const inputPassword = document.querySelector(".password");

inputPassword.addEventListener("input", functionPassword);

function functionPassword() {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 75);
}

// 13.6 Eventos del DOM - Submit.

const fomrulario = document.querySelector("#formulario");
fomrulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector(".nombre").value;
  const password = document.querySelector(".password").value;

  if (nombre === "" || password === "") {
    console.log("Todos los campos son obligatorios");
  } else {
    console.log("Datos enviados");
  }
});
