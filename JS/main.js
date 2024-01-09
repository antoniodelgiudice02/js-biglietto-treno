const resultElement = document.getElementById ('prezzo');


// chiedere all'utente il numero di chilometri che vuole percorrere. 
const km = parseInt (prompt ('quanti chilometri vuole percorrere il passeggero?'));
console.log (km);

// chiedere all'utente l'età del passeggero.
const age = parseInt (prompt ('quanti anni ha il passeggero?'));
console.log (age);

// calcolare il prezzo totale del viaggio (0.21 € al km).
const price = (km * 0.21);


// applicare sconto del 20% per i minorenni.
// applicare sconto del 40% per gli over 65.

if (age < 18){
    const sale = price - price * 20 / 100;
    console.log(sale); 
}

if (age > 65){
    const sale = price - price * 40 / 100;
    console.log(sale); 
}

// stampare prezzo finale in forma umana (con massimo due decimali).



//const humanPrice = parseInt(price.toFixed(2))
//console.log (humanPrice)

