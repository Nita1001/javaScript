// Guess My Letter
//generating random lowerCase letter
"use strict";
const inputLetter = document.querySelector("#keys-guessed");
const correctGuess = document.querySelector("#nice-guess");
const wrongGuess = document.querySelector("#wrong-guess");
const wouldYou = document.querySelector("#would-you");
const playAgainBtn = document.querySelector("#play-again");
const showCorrectLetter = document.querySelector('#show-letter');
const hideQuestion = document.querySelector('#question');
let randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
let endGame = false;

function newGame() {
    randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    wouldYou.classList.add("hide");
    playAgainBtn.classList.add("hide");
    correctGuess.classList.add("hide");
    hideQuestion.classList.remove('hide');
    showCorrectLetter.classList.add('hide');
    inputLetter.value = "";
    endGame = false;
}
function showLetter(){
    showCorrectLetter.innerText = randomLetter;
    hideQuestion.classList.add('hide');
    showCorrectLetter.classList.remove('hide');
}
function correct(){
    showLetter();
    setTimeout(() => {
        wouldYou.classList.remove("hide");
        playAgainBtn.classList.remove("hide");
    }, 1000);
    wrongGuess.classList.add("hide");
    correctGuess.classList.remove("hide");
    endGame = true;
}

inputLetter.addEventListener("keypress", (ev) => {
    if(!endGame)
    {
        console.log(randomLetter);
        if (ev.key === randomLetter) {
            correct();
        } else {
            wrongGuess.classList.remove("hide");
        }
    } else {
        ev.preventDefault();
        return false;
    }
});

playAgainBtn.addEventListener("click", () => {
    newGame();
});
