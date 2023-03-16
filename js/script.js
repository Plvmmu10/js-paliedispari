// PAROLA PALINDROMA

// consegna = Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = document.getElementById('wordInput');

const palBtn = document.getElementById('palBtn');

palBtn.addEventListener('click',checkPalindrome);


// function to check if a string is palindrome
function checkPalindrome (){
    
    let wordValue = word.value;
    let wordReversed = wordValue.split('').reverse().join('');

    if (wordReversed === wordValue){
        document.getElementById('palindromeResult').innerHTML = '<h3 class="text-success"><strong>Questa parola è un palindromo</strong></h3>'
    }
    else{
        document.getElementById('palindromeResult').innerHTML = '<h3 class="text-danger"><strong>Questa parola non è un palindromo</strong></h3>'
    }
    
}


// PARI O DISPARI
// consegna = L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// select values
const gameBtn = document.getElementById('gameBtn');
gameBtn.addEventListener('click', function(){
    let oddOrEvenSelect = document.getElementById('oddOrEvenSelect');
    let numberSelect = document.getElementById('numberSelect');

    let userNumber = parseInt(numberSelect.value);
    let userOddOrEven = oddOrEvenSelect.value;
    let computerNumber = rndNumber(1,5);
    let result = document.getElementById('oddOrEvenResult');
    let sumResult = document.getElementById('sumResult');

    let totalResult = sumNumbers(userNumber,computerNumber);
    
    if ((userOddOrEven === "even") && (totalResult % 2 === 0)){
        sumResult.innerHTML = `<h3 class="text-black">E' uscito il numero ${totalResult}</h3>`
        result.innerHTML = `<h2 class="text-success">Hai Vinto</h2>`

    }else if ((userOddOrEven === "odd") && (totalResult % 2 === 1)){
        sumResult.innerHTML = `<h3 class="text-black">E' uscito il numero ${totalResult}</h3>`
        result.innerHTML = `<h2 class="text-success">Hai Vinto</h2>`

    }else{
        sumResult.innerHTML = `<h3 class="text-black">E' uscito il numero ${totalResult}</h3>`
        result.innerHTML = `<h2 class="text-danger">Hai Perso</h2>`
    }
    
})


function sumNumbers(num1, num2){
    return num1 + num2;
}


// Get random number for computer number
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}