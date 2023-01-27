/*Iteración #1: Buscar el máximo**
Completa la función que tomando dos números como argumento devuelva el más alto.*/

function numbers(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne;
  } else {
    return numTwo;
  }
}

numOne = 10;
numTwo = 20;

console.log(numbers(10, 20));

/*Iteración #2: Buscar la palabra más larga**
 Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestWord = " ";
  for (const avenger of avengers) {
    if (avengers.length > findLongestWord.length) {
      longestWord = avenger;
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));

/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.  */

/* const numbers = [1, 2, 3, 5, 45, 37, 58];
const sumAll = (param) => {
  let sumAll = 0;
  for (let i = 0; i < numbers.length; i++);
  sumAll += param[i];
};
sumAll(numbers);
console.log(sumAll); */

/* **Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
 */
/* const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
 */

/* Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

/* const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
let stringContainer = [mixedElements]
let numberContainer = [mixedElements]
function averageWord(param) {
  for (let i=0; i<param.length; i++) {
    if ( typeof param[i] == "string") {
      stringContainer += param[i].length
    }else {numberContainer += param[i]}
  }

}
console.log(stringContainer);
console.log(numberContainer); */


/* **Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
 const remove = []
 for (let i=0; i<param.length; i++) {
  if (!remove.includes(param[i])) {
    remove.push(param[i])
  }
 }
 console.log(remove)
}
removeDuplicates(duplicates)
/* **Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param, value) {
  let found = false;
  let position;
  for ( let i=0; i<param.length; i++) {
    if (param[i] === value) {
      found = true;
      position = i;
      break;
}
  }
  return {found: found, position: position};
}
console.log(finderName(nameFinder, "Xabier"));
console.log(finderName(nameFinder, "Saray"));

/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función: */

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
  // insert code
}
