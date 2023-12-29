// 110.0 - Array Methods

const tecnologias = ["HTML", "CSS", "JS", "REACT", "NODE"];
const numeros = [10, 20, 30];

let nuevoArray;

// 10.1 - Metodo Filter

// El método filter en JavaScript se utiliza para crear un nuevo array
// con elementos que cumplen una condición específica,
// filtrando aquellos que no la satisfacen.

nuevoArray = tecnologias.filter((tech) => tech !== "REACT");
console.log(nuevoArray);

// 10.2 - Metodo Include - antiguo
// Para comprobar si un elemento existe en el array
// Devuelve true o false

const result = tecnologias.includes("REACT");
console.log(result);

// 10.3 - Metodo Some - Nuevo
// Devuelve true si al menos uno cumple la condicion
const result2 = numeros.some((numero) => numero > 15);
console.log(result2);

// 10.4 - Metodo Find
// Devuelve el primer elemento que cumpla la condicion
const result3 = numeros.find((numero) => numero > 15);
console.log(result3);

// 10.5 - Metodo Every
// Retorna truo o false si todos cumplen la condicion
const result4 = numeros.every((numero) => numero > 15);
console.log(result4);

// 10.6 Metodo Reduce
// El método reduce en JavaScript reduce un array a un
// valor único acumulado aplicando una función a cada elemento.
const result5 = numeros.reduce((total, numero) => numero + total, 0);
console.log(result5);

// 10.7 Filter - Otra forma
const result6 = tecnologias.filter((tech) => tech === "NODE");
const result7 = numeros.filter((numero) => numero > 15);

console.log(result6);
console.log(result7);

// 10.8 - Metodo forEach
// Sirve para iterar elemento de un array
tecnologias.forEach((tech) => console.log(tech));

// 10.9 - Metodo Map
// El método map en JavaScript crea un nuevo array al aplicar
// una función a cada elemento del array original.
const result8 = tecnologias.map((tech) => tech);
console.log(result8);
