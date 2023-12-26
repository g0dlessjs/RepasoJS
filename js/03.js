// 2.- Estructuras y Tipos de Datos en JS

/*
    Tipos de Datos:
    Object
    Number
    Big int
    Null
    Boolean
    String
    Undefined
    Function
    Symbo

*/

// typeof para verifica el tipo de dato de la variable

// Undefined
// Cuando creas una variable  y no le asignas un valor
let cliente;

console.log(typeof cliente);

// Boolean
// Tipo de datos true o false, no existe otra opcion
let descuento = true;

console.log(typeof descuento);

// Number
const num1 = 20;
const num2 = 30.2;
const num3 = 41000;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

// Stringsl
const alumno = "Jaus";
let producto = "monitor";

const numero = "30";
const numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);

// BigInt - No se puede sumar con tipos Number
const numeroGrande =
  BigInt(34987478483978947898974389743987549873457983459873479834998743897);
console.log(typeof numeroGrande);

const num4 = 10;
const num5 = 20;

console.log(num4 + num5);

// Symbol, un dato unico
const primerSymbol = Symbol(39);
const segundoSymbol = Symbol(10);
console.log(primerSymbol == segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// Null
const descuentoNuevo = null;
