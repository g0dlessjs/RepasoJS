// 12 - Scope variables

/**
    El "scope" en JavaScript se refiere al contexto en 
    el cual las variables son declaradas y accedidas. 
    Existen dos tipos principales de scope: 
    "local" (funciones) y "global" (todo el programa).
 */

const precio = 300;

function functionTest() {
  const precio = 600;
  console.log(precio);
}

console.log(precio);

functionTest();
