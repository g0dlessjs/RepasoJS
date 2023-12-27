// Introduccion a Arreglos (Array)

const tech = ["React", "Node", "Angular", "Vue", 20, true];

console.log(tech);

// LLamar dato por el index: ej: seria React
console.log(tech[0]);
// Largo de un arregl: ej: seria 6
console.log(tech.length);
// Imprimir todo lo que tiene un arreglo
console.log(tech.toString());

// Manipulacion de Arreglos (arrays)

const tecnologias = ["React", "Next", "mongoDB", "HTML", "Css", "JS"];

// Añadir elemento al final array - EVITAR
// tecnologias.push("TailwindCss"); ya no se utiliza, porque moficia el arreglo
// console.log(tecnologias);

// Añadir elemento al inicio del array - EVITAR
// tecnologias.unshift("Node");  ya no se utiliza, porque moficia el arreglo
// console.log(tecnologias);

// Añadir al final o inicio nuevo metodo
const nuevoArreglo = ["Tailwind", ...tecnologias, "Node"];
console.table(nuevoArreglo);

// Eliminar elemtos del array, pero modifican el array original

// tecnologias.pop()  Elimina de final
// tecnologias.shift()  Elimina del inicio

// nuevoArreglo.splice(3, 1); Elimina de una posicion especifica
console.table(nuevoArreglo);

// Filter sirve para listar elementos, filtrar y hasta eliminar
const nuevoArreglo2 = tecnologias.filter((tech) => {
  return tech !== "Node";
});

console.log(nuevoArreglo2);

// Reemplazar del array, Metodo antiguo
tecnologias[0] = "GraphQL";

// Metodo Nuevo
const nuevoArray = tecnologias.map(function (tech) {
  if (tech === "Css") {
    return "Bulma";
  } else {
    return tech;
  }
});

console.log(nuevoArray);
