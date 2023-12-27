// Destrunturing de Arrays
// const tech = ["React", "Node", "Angular", "Vue", 20, true];

// Ejemplo para iterar todos
// const [react, node, angular] = tech;

// Iterar un dato en especifico, nos saltamos la variable por 1 coma
// const [, , angular, ,] = tech;

// console.log(angular);

// Iteradores en  Array
const tecnologias = ["React", "Node", "Angular", "Vue", 20, true];

// ForEach para iterar elemento de una array, no permite crear un nuevo array
const arrayForEach = tecnologias.forEach(function (element) {
  console.log(" - ", element);
});

// Map para iterar elemento de una array, se usa mucho en react
const arrayMap = tecnologias.map((tech) => {
  console.log(tech);
});

console.log(arrayForEach);
console.log(arrayMap);
