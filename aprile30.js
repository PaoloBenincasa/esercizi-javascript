// Conta le vocali: Scrivi una funzione che prenda una stringa come input e restituisca il numero di vocali (a, e, i, o, u) presenti nella stringa (ignorando la distinzione tra maiuscole e minuscole).

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("paolo benincasa"));

// oppure

function countVowelsRegExp(str) {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches ? matches.length : 0;
}

console.log(countVowelsRegExp("Paolo Benincasa"));


// Comprimi una stringa: Scrivi una funzione che prenda una stringa come input e la "comprima" sostituendo le sequenze consecutive di caratteri uguali con il carattere seguito dal numero di ripetizioni. Ad esempio, "aaabbc" dovrebbe diventare "a3b2c1". Se la stringa compressa non è più corta dell'originale, puoi restituire l'originale.

function compressString(str) {
    let compressed = "";


    let i = 0;
    // ciclo sulla stringa
    while (i < str.length) {
        // salvo il carattere corrente
        const char = str[i];
        // tengo conto del numero di ripetizioni
        let count = 0;

        // ciclo interno: finchè l'indice è minore della length e il carattere su cui scorro è uguale a quello esaminato
        while (i < str.length && str[i] === char) {
            // 1. aumento il conteggio
            count++;
            // 2. contunuo a scorrere
            i++;
        }
        // aggiungo il carattere e il numero di ripetizioni alla stringa compressa
        compressed += char + count;
    }

    if (compressed.length >= str.length) {
        return str;
    } else {
        return compressed;
    }
}

console.log(compressString("aaabbc"));

// Rimuovi i duplicati da un array: Scrivi una funzione che prenda un array di numeri interi come input e restituisca un nuovo array contenente solo gli elementi unici (rimuovendo i duplicati). L'ordine degli elementi nel nuovo array non è importante.

function removeDuplicates(array){
    let newArray = [];

    for(let i =0; i < array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i]);
        } 
    }
    return newArray;
}

console.log(removeDuplicates([2, 3, 4, 4, 5]));

// Somma degli elementi di un array: Scrivi una funzione che prenda un array di numeri interi come input e restituisca la somma di tutti gli elementi dell'array.

function sum(array){
    return array.reduce((acc,el)=> acc +el);
}

console.log(sum([12, 12, 12]));

