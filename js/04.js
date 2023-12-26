// Objetos en Js

// const nombre = "pc";
// const precio = 20000;
// const disponible = true;

// Crear Objeto
const producto = {
  nombre: "Teclado",
  precio: 35000,
  disponible: true,
};

// console.log(producto);
console.table(producto);

// Leer propiedades  de objeto
console.log(producto.nombre);
console.log(producto.precio);

// Destructuring ( Sacar valor de una estructura de datos)
const { nombre, precio, disponible } = producto;

console.log(nombre, precio, disponible);

// Object Literal Enhancement
const autenticado = true;
const user = "godless";

const nuevoObjet = {
  autenticado,
  user,
};

console.log(autenticado);
console.log(user);
