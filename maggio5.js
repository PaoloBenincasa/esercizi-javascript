// Rimuovi gli elementi falsy da un array: Scrivi una funzione che prenda un array come input e restituisca un nuovo array contenente solo gli elementi "truthy" dell'array originale (ad esempio, escludendo null, undefined, 0, "", false, NaN).

function removeFalsy(array) {
    const newArray = [];
    for (const el of array) {
        if (!!el === true) {
            newArray.push(el);
        }
    }
    return newArray;
}

console.log(removeFalsy([null, 1, undefined, 2, "", 3]));

// Trova il secondo numero più grande in un array: Scrivi una funzione che prenda un array di numeri interi come input e restituisca il secondo numero più grande presente nell'array. Gestisci anche il caso di array con meno di due elementi o con duplicati.

function findSecondBiggest(array) {
    if (array.length < 2) {
        return undefined;
    }

    const newArray = [...new Set(array)].sort((a, b) => b - a);
    return newArray[1];
}

console.log(findSecondBiggest([2, 5, 7, 21, 5, 45, 45]));

// Verifica se un array contiene un determinato elemento (senza includes): Scrivi una funzione che prenda un array e un elemento come input e restituisca true se l'elemento è presente nell'array, e false altrimenti, implementando la logica di ricerca manualmente.

function includes(array, searched) {
    for (const element of array) {
        if (element === searched) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 2, 3], 4));

// Appiattisci un array di un livello: Scrivi una funzione che prenda un array contenente altri array (solo un livello di profondità) e restituisca un nuovo array contenente tutti gli elementi dei sottarray "appiattiti" in un unico array. Ad esempio, [1, [2, 3], 4, [5, 6]] dovrebbe diventare [1, 2, 3, 4, 5, 6].

function flattenArray(array) {
    const newArray = [];
    for (const element of array) {
        if (Array.isArray(element) == false) {
            newArray.push(element);
        } else if (Array.isArray(element) == true) {
            for (let i = 0; i < element.length; i++) {
                newArray.push(element[i]);
            }
        }
    }
    return newArray;
}

console.log(flattenArray([1, [2, 3], 4, [5, 6]]));

// Trova la stringa più lunga in un array: Scrivi una funzione che prenda un array di stringhe come input e restituisca la stringa più lunga presente nell'array. Se ci sono più stringhe con la stessa lunghezza massima, puoi restituirne una qualsiasi. Gestisci anche il caso di un array vuoto (potresti restituire una stringa vuota o undefined).

function findLongestWord(array) {
    if (array.length === 0) {
        return " ";
    }

    let longestLength = 0;
    let longestWord = "";

    for(const word of array){
        if (word.length > longestLength){
            longestLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord(["ciao", "murfsafasato", "usciamo"]));


// Rimuovi gli elementi duplicati da un array (mantenendo l'ordine): Scrivi una funzione che prenda un array come input e restituisca un nuovo array contenente solo gli elementi unici dell'array originale, mantenendo l'ordine in cui sono comparsi per la prima volta. Ad esempio, se l'input è [1, 2, 2, 3, 1, 4], l'output dovrebbe essere [1, 2, 3, 4].

function removeDuplicates(array){
    const newArray = [];

    for(const element of array){
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(removeDuplicates( [1, 2, 2, 3, 1, 4]));

// Inverti una stringa: Scrivi una funzione che prenda una stringa come input e restituisca una nuova stringa con i caratteri in ordine inverso. Ad esempio, se l'input è "ciao", l'output dovrebbe essere "oaic".

function invertString(str){
    return str.split("").reverse().join("");
}

console.log(invertString("ciao"));

// Trova il primo carattere non ripetuto in una stringa: Scrivi una funzione che prenda una stringa come input e restituisca il primo carattere nella stringa che non si ripete. Se tutti i caratteri nella stringa si ripetono, dovresti restituire undefined o un valore simile. Ad esempio, per "aabbcdd", la funzione dovrebbe restituire "c". Per "aabbcc", dovrebbe restituire undefined.

function firstNonRepeatedChar(str){
    const frequency = {};

    for(const char of str){
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for(const char of str){
        if(frequency[char] === 1){
            return char;
        }
        
    }
   
    return undefined;
}

console.log(firstNonRepeatedChar("aabbcc"));

// Unisci due array: Scrivi una funzione che prenda due array come input e restituisca un nuovo array contenente tutti gli elementi del primo array seguiti da tutti gli elementi del secondo array. (Evita di usare il metodo concat direttamente).

function uniteTwoArrays(array1, array2){
    const newArray = [...array1];
    for(const element of array2){
        newArray.push(element);
    }
    return newArray;
}

console.log(uniteTwoArrays([1, 2, 3], [4, 5, 6]));


