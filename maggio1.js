// Trova l'elemento mancante: Dato un array di numeri interi da 0 a n (con un numero mancante), scrivi una funzione che trovi e restituisca il numero mancante. Ad esempio, se l'input è [0, 1, 3], il numero mancante è 2.

function findMissingNumber(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] != i){
            return array[i] - 1;
        }
    }
}

console.log(findMissingNumber([0, 1, 3]));

// Conta le parole in una stringa: Scrivi una funzione che prenda una stringa come input e restituisca il numero di parole presenti nella stringa. Considera che le parole sono separate da uno o più spazi.

function countWords(str){
    const wordsArray = str.split(" ");
    const validWords = wordsArray.filter(word=> word !== "");
    return validWords.length;
    
}

console.log(countWords("ho tanto    sonno"));

// Inverti le parole in una frase: Scrivi una funzione che prenda una stringa (una frase) come input e restituisca una nuova stringa con l'ordine delle parole invertito. Ad esempio, se l'input è "Ciao mondo", l'output dovrebbe essere "mondo Ciao".

function invertWords(str){
    return str.split(" ").reverse().join(" ");
}

console.log(invertWords("ciao mondo"));
