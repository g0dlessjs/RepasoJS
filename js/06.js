// Manipulacio de 2 o mas Objetos

const producto = {
  nombre: "Mouse",
  precio: 20000,
  disponibilidad: true,
};

const cliente = {
  nombre: "Corey",
  premium: true,
};

// Esto no se puede hacer porque tendriamos la variable nombre repetida,
// La solucion es darle un alias, asi no usaremos el mismo nombre

const { nombre, precio, disponibilidad } = producto;
const { nombre: nombreCliente, premium } = cliente;

console.log(nombre, precio, disponibilidad);
console.log(nombreCliente, premium);
