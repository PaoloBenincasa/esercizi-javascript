
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
