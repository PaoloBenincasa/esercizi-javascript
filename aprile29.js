// Estrai i numeri pari da un array: Scrivi una funzione che prenda un array di numeri interi come input e restituisca un nuovo array contenente solo i numeri pari presenti nell'array originale.

function extractEvenNumbers(array){
    return array.filter((el)=> el % 2 === 0);
}

console.log(extractEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Capitalizza la prima lettera di ogni parola in una stringa: Scrivi una funzione che prenda una stringa come input e restituisca una nuova stringa in cui la prima lettera di ogni parola è maiuscola. Ad esempio, se l'input è "ciao mondo", l'output dovrebbe essere "Ciao Mondo".

function capitalizeFirstWord(str){
    wordsArray = str.split(" ");
    newArray = [];
    for(const word of wordsArray){
        singleWordArray = word.split("");
        const upper = singleWordArray[0].toUpperCase();
        singleWordArray.splice(0, 1, upper);
        newWord = singleWordArray.join("");
        newArray.push(newWord);
    }
    return newArray.join(" ");
}

console.log(capitalizeFirstWord("ciao mondo"));

// oppure

function capitalizeFirstWordMap(str){
    wordsArray = str.split(" ");
    const capitalizedWords = wordsArray.map(word=>{
        if (word.length > 0){
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return "";
        }
    });
    return capitalizedWords.join(" ");
}

console.log(capitalizeFirstWordMap("ciao mondo"));
 
// Trova il numero più grande: Scrivi una funzione che prenda un array di numeri interi come input e restituisca il numero più grande presente nell'array.

function findBiggestNumber(array){
    return Math.max(...array); 
}

console.log(findBiggestNumber([4, 84, 14, 21]));


