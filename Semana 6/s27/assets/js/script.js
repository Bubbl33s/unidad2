/*
Sintaxis

function nombreDeLaFuncion(parametro1, paramtero2) {
  // Bloque de codigo de la función, indentado
  return valorDeRetorno;
}

- Palabra reservada function
- Nombre de la función, siguiendo las mismas reglas de las variables
- Paréntesis de apertura y cierre obligatorios
- Si nuestra función recibe parámetros, los colocamos dentro de los
paréntesis, separados por comas si hay más de uno
- Abrir llaves
- Bloque de código a ejecutar de la función
- El retorno de datos si nuestra función lo necesita
- Cerrar llaves
*/
/*
// Función que reciba dos números y retorne la suma de los mismos
// Definición de la función
function sumar(num1, num2) {
  let resultado = num1 + num2;

  return resultado;
}

// Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);
console.log(sumar(-43, 11));

console.log("");

// Función que reciba dos números y retorne la resta de los mismos
function restar(num1, num2) {
  let resultado = num1 - num2;

  return resultado;
}

// Llamamos a la función
let respuestaResta = restar(78, 156);
console.log(respuestaResta);

console.log("");

// Funciones para multiplicar y dividir
function multiplicar(num1, num2) {
  let resultado = num1*num2;

  return resultado;
  // No se ejecuta después del retorno
  console.log("Después del retorno");
}

// Llamamos a la función
let respuestaMultiplicar = multiplicar(34, 3);
console.log(respuestaMultiplicar);

console.log("");

function dividir(num1, num2) {
  if (num2 != 0) {
    let resultado = num1/num2;

    return resultado;
  }

  return "ERROR: DIVIDENDO CERO";
}

// Llamamos a la función
let respuestaDividir = dividir(36, 0);
console.log(respuestaDividir);

console.log("");


// Función que reciba dos números y retorne la suma de los mismos
// Definición de la función
function sumar(num1, num2) {
  let resultado = num1 + num2;

  return resultado;
}

// Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);
console.log(sumar(-43, 11));

console.log("");
*/

// Arrow function significa función de flecha
// Sumar
let sumar = (num1, num2) => num1 + num2;

// Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);

console.log("");

// Restar
let restar = (num1, num2) => {
  let resultado = num1 - num2;

  return resultado;
};

// Llamamos a la función
let respuestaResta = restar(30, 15);
console.log(respuestaResta);

console.log("");

// Funciones para multiplicar y dividir en arrow function
