// Unir 2 o mas objetos

const producto = {
  nombre: "Mouse",
  precio: 20000,
  disponibilidad: true,
};

const cliente = {
  nombre: "Corey",
  premium: true,
};

// producto.cliente = cliente; NO!!

// El objeto original esta siendo modificado, mala practica hoy en dia
// ahora se usa lo que se conoce como inmutabilidad, se cre aun nuevo objeto
// para no modificar el original

// console.log(producto);

// Se crean nuevo objeto con este metodo pero tampoco sirve,
// por que esta sobreescribiendo los datos con el mismo nombre

// Object.assign modifica el original
// const nuevoObjeto = Object.assign(producto, cliente); NO!!

// console.log(nuevoObjeto);

// Spread Operator, igualmente elimina el nombre del producto
const nuevoObjeto2 = { ...producto, ...cliente };
console.table(nuevoObjeto2);

// Ejemplo valido
const nuevoObjeto3 = {
  producto: { ...producto },
  cliente: { ...cliente },
};

console.table(nuevoObjeto3);
