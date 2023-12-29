// Condicionales - Seccion 11

// 11.1 - if else
const disponible = 2000;
const retirar = 10000;

if (disponible > retirar) {
  // Se cumple la condicion y se ejecta el codigo.
  console.log("Si puedes retirar");
} else {
  console.log("Lo siento, no puedes retirar");
}

/**
    > - Mayor que
    < - Menor que
   >= - Mayor o igual
   <= - Menor o igual

 */

// 11.2 - Comparacion con == , === y operador estricto

const num1 = 20;
const num2 = "20";

// == - operador de comparacion no estricto
// Revisa solo el valor del dato
if (num1 == num2) {
  console.log("Si, son iguales");
} else {
  console.log("No, no soy iguales");
}

// === - operador de comparacion estricto
// Revisa el valor y tipo de dato
if (num1 === Number(num2)) {
  console.log("Si, son iguales");
} else {
  console.log("No, no soy iguales");
}

// Otro ejemplo basico
const autenticado = true;

if (autenticado) {
  console.log("Si esta autenticado");
}

// 11.3 Condicion || y &&

/**
    || - OR - Si se cumple 1 de 2 es true, si no se cumple ninguna false
    $$ - AND - Todas las condicionales deebn cumplirse, si no es false
 */

const saldo = 600;
const pagar = 500;
const tarjeta = true;

// ejemplo
// if (saldo > pagar) {
//   console.log("Puedes pagar");
// } else if (tarjeta) {
//   console.log("Puedes pagar con tu tarjeta");
// } else {
//   console.log("No, no puedes pagar");
// }

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No, no puedes pagar");
}

// 11.4 Condicionales Ternario

const logeado = true;

logeado ? console.log("Autentiado") : console.log("No Autenticado");

// Doble Condicional ternario
saldo > pagar
  ? "Puedes pagar con saldo"
  : tarjeta
  ? "Puedes pagar con tarjeta"
  : console.log("No puedes pagar");
