const randomNumbers = []; //array di numeri casuali
const N = 5; //grandezza massima dell'array di numeri casuali
const time = 30000; //30 secondi di attesa
let counter = 5; //contatore

//Ciclo
for (let i = 0; i < N; i++) {
    let random = getRandomIntInclusive(1, 100); //genero un numero casuale
    randomNumbers.push(random); //inserisco il numero casuale nell'array
    alert("Numero: " + randomNumbers[i]); //stampo il numero casuale
}

console.log(randomNumbers); //stampo in console l'array di numeri casuali

//Countdown
const countdown = setInterval(function () {
    //Se il contatore non è a zero
    if (counter >= 0) {
        console.log(counter); //stampo il i secondi
        counter--; //decremento il contatore
    } else { //altrimenti
        clearInterval(countdown); //elimino il countdown
    }
}, 1000);

//Tempo di attesa
/*setTimeout(function () {
    //Ciclo
    for (let i = 0; i < N; i++) {
        let userNumbers = parseInt(prompt("Inserire il numero:")); //chiedo all'utente di inserire i numeri
        console.log("Numero inserito: " + userNumbers);
        //Se i numeri inseriti dall'utente sono corretti
        if (randomNumbers.includes(userNumbers)) {
            console.log("Numero corretto: " + userNumbers); //stampo un messaggio di successo
        } else { //altrimenti
            console.log("Numero sbagliato: " + userNumbers); //stampo un messaggio di errore
        }
    }
}, time);*/

//Funzione per generare dei numeri casuali
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); //arrotondo per eccesso
    max = Math.floor(max); //arrotondo per difetto
    return Math.floor(Math.random() * (max - min + 1) + min); //restituisco il numero casuale
  }