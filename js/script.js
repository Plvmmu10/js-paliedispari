// PAROLA PALINDROMA

// consegna = Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = document.getElementById('wordInput');

const palBtn = document.getElementById('palBtn')

palBtn.addEventListener('click', checkPalindrome);


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
