// Trova la moda di un array: Scrivi una funzione che prenda un array di numeri interi come input e restituisca la moda dell'array (l'elemento che compare più frequentemente). Se ci sono più mode, puoi restituirne una qualsiasi.

function findModa(array) {
    const frequency = {};
    let maxFrequency = 0;
    let moda = null;

    for (const number of array) {
        // definisco la chiave dell'oggetto con la bracket syntax frequency[number] e non la dot syntax sia perchè con un oggetto vuoto la dot syntax non funziona sia perchè voglio accedere al VALORE della variabile number, non alla stringa letterale
        // se il number corrente non è ancora una chiave nell'oggetto frequency[number] sarà undefined quindi || selezionerà 0 come valore, che incrementeremo di uno
        // se il number corrente è già una chiave nell'oggetto prendiamo il suo valore e lo incrementiamo di uno
        frequency[number] = (frequency[number] || 0) + 1;


        // se la frequenza del number corrente è maggiore di quella trovata finora (cioè maxFrequwncy)
        if (frequency[number] > maxFrequency) {
            // aggiorno maxFrequency con la frequenza corrente
            maxFrequency = frequency[number];
            // e aggiorniamo moda con l'elemento corrente
            moda = number;
        }
    }
    console.table(frequency);
    return moda;
}

console.log(findModa([75, 76, 76, 77, 78, 77, 77, 77]));

// Trova l'ultimo elemento di un array: Scrivi una funzione che prenda un array come input e restituisca l'ultimo elemento dell'array. Gestisci anche il caso di un array vuoto (potresti restituire undefined o un valore simile).

function findLast(array) {
    if (array.length === 0) {
        return undefined;
    } else if (array.length > 0) {
        return array[array.length - 1];
    }
}

console.log(findLast(["Tizio", "Caio", "Sempronio"]));

// Verifica se tutti gli elementi di un array soddisfano una condizione: Scrivi una funzione che prenda un array e una funzione di callback (che accetta un elemento e restituisce un booleano) come input. La funzione principale dovrebbe restituire true se la funzione di callback restituisce true per tutti gli elementi dell'array, e false altrimenti.

function areAllElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

function moreThan3(element) {
    return element > 3 ? true : false;
}

console.log(areAllElements([2, 3, 4, 5], moreThan3));

// Crea un array di coppie chiave-valore da un oggetto: Scrivi una funzione che prenda un oggetto JavaScript come input e restituisca un array di array, dove ogni sottarray contiene una coppia [chiave, valore] dell'oggetto.

function objToArray(obj) {
    const array = [];

    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value]);
    }

    return array;
}

const mioOggetto = {
    nome: "Alice",
    età: 30,
    città: "Roma",
    professione: "Ingegnere",
    interessi: ["viaggiare", "leggere", "cucinare"]
  };

console.table(objToArray(mioOggetto));

// Trova la somma degli elementi positivi in un array: Scrivi una funzione che prenda un array di numeri (che possono essere positivi, negativi o zero) e restituisca la somma di tutti i numeri positivi presenti nell'array.

function sumPositiveNumbers(array){
    const filtered = array.filter((number)=> number > 0);
    return filtered.reduce((acc, el) => acc + el);
}

console.log(sumPositiveNumbers([-2, 0, 3, 3, 3]));

