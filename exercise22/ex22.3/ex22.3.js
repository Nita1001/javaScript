// Guess My Letter
//generating random lowerCase letter 
'use strict'
const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
const inputLetter = document.querySelector('#keys-guessed');
const correctGuess = document.querySelector('#nice-guess');
const wrongGuess = document.querySelector('#wrong-guess');
inputLetter.addEventListener('keypress', (ev) => {
    console.log(ev.key);
    console.log(randomLetter);
    if(ev.key === randomLetter)
    {   
        wrongGuess.classList.add('hide');
        correctGuess.classList.remove('hide');
        inputLetter.addEventListener('keydown', (ev) =>{
            ev.preventDefault();
            return false; 
        });
    } else{
        wrongGuess.classList.remove('hide');
    }
})


// after reset game 
//         correctGuess.classList.add('hide');
