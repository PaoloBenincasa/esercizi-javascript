// Trova l'intersezione di due array: Scrivi una funzione che prenda due array come input e restituisca un nuovo array contenente solo gli elementi che sono presenti in entrambi gli array. Gestisci anche il caso di duplicati (se un elemento compare più volte in entrambi gli array, dovrebbe comparire lo stesso numero di volte nell'intersezione).

const numbers1 = [2, 4, 6, 8, 2, 4, 6, 8];
const numbers2 = [2, 2, 3, 4];

function twoArraysIntersect(array1, array2) {
    // creo un oggetto per memorizzare la frequenza degli elementi in array2
    const frequency = {};
    // array vuoto in cui pushare gli elementi presenti in entrambi
    const intersection = [];

    // ciclo su array2 popolando l'oggetto con l'elemento e la sua frequenza
    for (const element of array2) {
        frequency[element] = (frequency[element] || 0) + 1;
    }

    // ciclo su array1
    for (const element of array1) {
        // se la frequenza è maggiore di zero (cioè è presente nell'oggetto)
        if (frequency[element] > 0) {
            // lo pusho nell'array vuoto
            intersection.push(element);
            // lo decremento nell'oggetto, altimenti verrebbe aggiunto a intersection anche se non è in entrambi gli array lo stesso numero di volte
            frequency[element]--;
        }
    }

    return intersection;
}

console.log(twoArraysIntersect(numbers1, numbers2));

// Rimuovi un elemento specifico da un array (senza filter): Scrivi una funzione che prenda un array e un valore come input e restituisca un nuovo array contenente tutti gli elementi dell'array originale tranne quello specificato. Se l'elemento compare più volte, rimuovi tutte le sue occorrenze.

function removeElement(array, remove) {
    const newArray = [];

    for (const element of array) {
        if (element !== remove) {
            newArray.push(element);
        }
    }

    return newArray;
}

console.log(removeElement([1, 2, 3, 4], 2));

// Verifica se una stringa contiene un'altra sottostringa (senza includes o indexOf): Scrivi una funzione che prenda due stringhe come input (la stringa principale e la sottostringa da cercare) e restituisca true se la sottostringa è presente nella stringa principale, e false altrimenti.

function substrInString(str, substr) {
    for (let i = 0; i < str.length; i++) {
        let check = str.slice(i, i + substr.length)
        if (check === substr) {
            return true;
        }
    }
    return false;
}


console.log(substrInString("Benincasa", "inca"));

// Converti una stringa in "snake case": Scrivi una funzione che prenda una stringa (che può contenere spazi o maiuscole) e la converta in "snake case", dove tutte le parole sono in minuscolo e separate da underscore (_). Ad esempio, "Ciao Mondo" dovrebbe diventare "ciao_mondo" e "Primo Esercizio" dovrebbe diventare "primo_esercizio".

function toSnakeCase(str) {
    return str.trim().toLowerCase().replace(/\s+/g, "_");
}

console.log(toSnakeCase("Ciao Mondo"));

// Trova l'indice dell'ultima occorrenza di un elemento in un array (senza lastIndexOf): Scrivi una funzione che prenda un array e un elemento come input e restituisca l'indice dell'ultima volta che l'elemento compare nell'array. Se l'elemento non è presente, dovrebbe restituire -1.

function lastIndex(array, searched) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === searched) {
            return i;
        }
    }
    return -1;
}

console.log(lastIndex(["ciao", "mano", "ciao", "piede"], "ciao"));

// Comprimi una stringa (versione più semplice): Scrivi una funzione che prenda una stringa come input e "comprima" le sequenze consecutive di caratteri uguali sostituendole con il carattere seguito dal numero di ripetizioni solo se la ripetizione è maggiore di 1. Ad esempio, "aaabbc" dovrebbe diventare "a3b2c". "abc" dovrebbe rimanere "abc".

function compressString(str) {
    let i = 0;
    let compressed = "";

    // ciclo sulla stringa
    while (i < str.length) {
        // salvo il carattere corrente
        const char = str[i];
        // tengo conto di quante volte si ripete
        let count = 0;

        // ciclo di nuovo: finchè il carattere esaminato è uguale al carattere corrente
        while (i < str.length && str[i] === char) {
            // aumento il count
            count++;
            // continuo a ciclare
            i++;
        }

        // se il conto è maggior di 1 aggiungo alla stringa comrpessa il carattere col relativo conto
        if(count > 1){
            compressed += char + count;
            // se è minore di 1 aggiungo solo il carattere
        } else {
            compressed += char;
        }
    }

    return compressed;
}

console.log(compressString("aaabbc"));

// Estrai un sotto-array: Scrivi una funzione che prenda un array, un indice di inizio (inclusivo) e un indice di fine (esclusivo) come input e restituisca un nuovo array contenente gli elementi dell'array originale compresi tra gli indici specificati. (Simile a slice ma implementato manualmente).

function extractSubarray(array, start, end){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        if(i >= start && i < end){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(extractSubarray(["ciao", "mondo", "infame", "ciao", "merda"], 1, 3));

// Verifica se un oggetto ha una determinata proprietà (senza hasOwnProperty): Scrivi una funzione che prenda un oggetto e una stringa (il nome della proprietà) come input e restituisca true se l'oggetto ha quella proprietà, e false altrimenti.

function hasProperty(obj, str){
    const keys = Object.keys(obj);

    for(const key of keys){
        if(key === str){
            return true;
        }
    }
    return false;
}

const persona = {
    nome: "Paolo",
    cognome: "Benincasa"
}

console.log(hasProperty(persona, "cognome"));

// Inverti l'ordine delle parole in una stringa: Scrivi una funzione che prenda una stringa come input e restituisca una nuova stringa con le parole in ordine inverso. Ad esempio, "Ciao mondo come stai" dovrebbe diventare "stai come mondo Ciao".

function invertWords(str){
    return str.split(" ").reverse().join(" ");
}

console.log(invertWords("Ciao mondo come stai"));

