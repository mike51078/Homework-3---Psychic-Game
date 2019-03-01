

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
var userGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 11;
var guessesSoFar = [];

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

alert("Do you want to play a game?  Press a letter key to try and guess which letter the computer has chosen.  Can you guess the letter in less than 10 tries?")

document.onkeyup = function (event)  {
         userGuess = event.key;
        guessesSoFar.push(event.key);
        guessesSoFarText.textContent = "Your guesses so far: " + guessesSoFar;

    if (userGuess === answer) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        alert("Great Job!  Can you do it again?");
        answer = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(answer);
    }
    
    if (userGuess !== answer) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        alert("All guesses gone.  Game over.  Try again!");
        answer = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(answer);
    }

        winsText.textContent = "Wins: " + wins;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        lossesText.textContent = "Losses: " + losses;

}

