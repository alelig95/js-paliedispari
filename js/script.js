// Chiedo all'utente di digitare una parola
var parolaScelta = prompt('Digita una parola');

// Creo una funzione per girare la parola
function palindrome(parolaScelta) {

  var lunghezza = parolaScelta.length;
  var parolaRovesciata = "";

    for ( var i = lunghezza - 1; i >= 0; i--) {
      console.log(parolaScelta[i]);
      parolaRovesciata += parolaScelta[i];
    }
    console.log(parolaRovesciata)
    return parolaRovesciata;
}

// Richiamo la funzione per girare la parolaScelta
var parolaRovesciata = palindrome(parolaScelta);

if(parolaScelta == parolaRovesciata){
  console.log('la parola è palindroma')
} else {
  console.log('la parola non è palindroma')
}


// Pari e dispari:

var pariDispari = prompt('Pari o dispari?')
var numeroScelto = parseInt(prompt('Scegli un numero da 1 a 5'));

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var somma = randomNumber(1, 5) + numeroScelto;

console.log('la somma dei numeri è ' + somma);

function numeroPari(somma) {
  number = parseInt(somma);
  if(somma % 2 === 0) {
    console.log('Vince il pari')
  } else {
    console.log('Vince il dispari')
  }
}

var numeroPari = numeroPari(somma);
