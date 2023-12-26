// Manipulacion de Objetos

const producto = {
  nombre: "Notebook i7",
  precio: 35000,
  disponible: true,
};

// Reescribir un valor
producto.nombre = "Smartphone Xiaomi";
console.table(producto);

// agregar una propiedad, si no existe, lo va añadir.
producto.imagen = "imagen.png";
console.table(producto);

// Eliminar una propiedad
delete producto.imagen;

console.table(producto);

// Freeze: No puedes reescribir, añadir ni eliminar propiedades del objeto
Object.freeze(producto);

// Seal: Modificar las propiedades existentes, pero no permite añadir o eliminar
Object.seal(producto);
