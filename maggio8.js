// Trova il primo carattere ripetuto in una stringa: Scrivi una funzione che prenda una stringa come input e restituisca il primo carattere che compare più di una volta nella stringa. Se non ci sono caratteri ripetuti, dovresti restituire undefined o un valore simile. Ad esempio, per "abacaba", la funzione dovrebbe restituire "a".

function findFirstRepeated(string){
    const seenChars = new Set();

    for (const char of string){
        if (seenChars.has(char)){
            return char;
        }
        seenChars.add(char);
    }
    return "there are no repeated chars"
}

console.log(findFirstRepeated("abacaba"));

// Calcola la deviazione standard di un array: Scrivi una funzione che prenda un array di numeri come input e restituisca la deviazione standard dei suoi elementi. (Ricorda che la deviazione standard misura la dispersione di un insieme di dati attorno alla sua media).

function standardDev(array){
    // calcolo la media
    let sum = array.reduce((acc, el)=> acc + el);
    let average = sum / array.length;
    
    // per ogni valore, torov la differenza tra il valore e la media 
    let diff = array.map((el)=> el - average);

    // elevo al quadrato le differenze e le sommo
    let quad = diff.map((el)=> el * el);
    let quadSum = quad.reduce((acc, el)=> acc +el);

    // divido la somma per il numero di valori
    let varianza = quadSum / array.length;

    // prendo la radice quadrata del risultato
    return Math.sqrt(varianza);
}

console.log(standardDev([1,2,3,4,5]));

// Trova la differenza tra due array: Scrivi una funzione che prenda due array di numeri interi come input e restituisca un nuovo array contenente tutti gli elementi presenti nel primo array ma non nel secondo.

function findDifferences(array1, array2){
    let newArray = [];

    for(const number of array1){
        if(!array2.includes(number)){
            newArray.push(number);
        }
    }

    return newArray;
}

console.log(findDifferences([1,2,3,4,5], [1,2,6,7,8]));

