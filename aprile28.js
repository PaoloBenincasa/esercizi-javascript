
// scrivi una funzione che prenda una stringa come input e restituisca vero se è un palindromo, ignorando la differenza tra maiuscole e minuscole e i caratteri non alfanumerici

function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    
    if(cleaned === reversed){
        return true;
    }

    return false;
}

console.log(isPalindrome("an na"));

// dato un array di numeri interi nums e un intero target, restituisci gli indici dei due numeri tali che la loro somma sia uguale a target

function target(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return [i, j];
            }
        }
    }
}

console.log(target([34, 2, 3, 67], 5));

// dato un array di numeri interi nums, trova il subarray contiguo (contenente almeno un numero) che ha la somma più grande e restituisci la somma

function largestSubarray(array){
    // creo la variabile che dobbiamo ritornare, la inizializzo col valore del primo elemento in modot tale che se ad esempio il primo è un numero positivo e tutti gli altri negativi ci ritorni comunque il valore corretto
    let maxSum = array[0];
    for(let i = 0; i < array.length; i++){
        // inizializzo la somma parziale, che a ogni ciclo verrà azzerata in modo tale da far ripartire il calcolo da ogni i
        let partialSum = 0;
        // ciclo di nuovo partendo dall'elemento su cui sto ciclando nel primo (cioè i). j è il punto di fine di ogni subarray contiguo, quindi a ogni iterazione del ciclo interno sto considerando da i a j.
        for(let j = i; j < array.length; j++){
            // aggiungo j alla somma parziale
            partialSum = partialSum + array[j];
            // confronto con math.max la somma massima e la parziale e assegno il valore più alto a max sum
            maxSum = Math.max(maxSum, partialSum);
        }
    }
    return maxSum;
}

console.log(largestSubarray([4, -6, 57, 77, 80, -3, 2, -54, 84, 1,]));

// scrivi una funzione che prenda una stringa come input e restituisca la stringa invertita (non puoi usare il metodo .reverse() predefinito)

function reverseString(str){
    let reversed = [];
    for(let i = 0; i < str.length; i++){
        reversed.unshift(str[i]);
    }
    return reversed.join("");
}

console.log(reverseString("benincasa"));

// Tronca una stringa: Scrivi una funzione che prenda una stringa e un numero massimo di caratteri come input. Se la stringa è più lunga del numero massimo, dovrebbe essere troncata alla lunghezza specificata e aggiungere "..." alla fine.

function truncateString(str, limit){
    if(str.length > limit){
        return str.slice(0, limit) + "...";
    }
}

console.log(truncateString("paolo", 3));

// Verifica se due array sono uguali (senza ordine): Scrivi una funzione che prenda due array come input e restituisca true se contengono gli stessi elementi con la stessa frequenza (l'ordine non è importante), e false altrimenti.

function twoArrays(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    
    for(let i = 0; i < sorted1.length; i++){
        if(sorted1[i] != sorted2[i]){
            return false;
        }
    }

    return true;
}

console.log(twoArrays([1, 2, 3], [1, 2, 54, 3]));
