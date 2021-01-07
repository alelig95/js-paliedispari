// var parolaScelta = prompt('Digita una parola');
// function palindrome(parolaScelta) {
//
//   var lunghezza = parolaScelta.length;
//
//   for ( var i = 0; i < parolaScelta; i++ ) {
//     if (parolaScelta[i] !== str[len - 1 - i]) {
//       return false;
//         }
//     }
//
//     return true;
// }

// Pari e dispari:

var pariDispari = prompt('Pari o dispari?')
var numeroScelto = prompt('Scegli un numero da 1 a 5');

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

console.log(randomNumber(1, 5));

var somma = randomNumber(1, 5) + numeroScelto;

console.log(somma);

function numeroPari(number) {
  number = parseInt(number);
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
