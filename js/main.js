
//Question to appear

let question = document.getElementById('question1');

question.innerHTML = "It's a well-known dish in Europe, any ideas?";

//European Dishes Words

let europeanDishes = ["paella", "croissant", "pizza", "bratwurst", "schnitzel", "goulash", "tiramisu", "ratatouille"];

//Random Word Selection

let wordToGuess;
function randomWordSelection() {
    // select random ward
    const randomIndex = Math.floor(Math.random() * europeanDishes.length);
    wordToGuess = europeanDishes[randomIndex];
    // storing the length in a variable
    let europeanDishToGuessLength = wordToGuess.length
    // target element
    // const wordDisplay = document.getElementById("word-display")
    console.log(wordToGuess, europeanDishToGuessLength);
}

randomWordSelection()

//Game Variables
let attemptsRemaining = 6;
//Updating the word display//
// we create array letterToGuess []  --> p, i, z, z, a
let lettersToGuess = [];
// let whatWeWantThe user to see = '_ _ _ _ _'
for (let i = 0; i < wordToGuess.length; i++) {
    lettersToGuess.push(wordToGuess[i]);
}
// if lettersGuessd still empty --> 
let displayWord = " _ ".repeat(wordToGuess.length);
// for each letterToGuess display _ in the dom
const wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = displayWord;

// step 2 --> get user input: use an <input> or get a keyboard event.
const letterInput = document.getElementById("letter-input");
const enterButton = document.getElementById("enter-button");
enterButton.addEventListener("click", function () {
    const inputLetter = letterInput.value;
    if (inputLetter.length !== 1 || !/[a-z]/.test(inputLetter)) {
        // Check if the input is a single letter from a to z
        letterInput.value = ""; // Clear the input field
        return;
    }
   
    handleGuess(inputLetter);
    letterInput.value = ""; // Clear the input field for the next guess
   // Update the word display in the DOM
    wordDisplay.textContent = displayWord;
});
function handleGuess(guess) {
    // Check if the guessed letter is in the word
    let guessedCorrectly = false;
    
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
            // If the guessed letter matches a letter in the word,
            // update the displayWord at the corresponding position
            displayWord = updateDisplayWord(displayWord, guess, i);
            guessedCorrectly = true;
        }
    }

    return guessedCorrectly;
}

function updateDisplayWord(displayWord, guess, index) {
    // Create a new displayWord with the guessed letter at the specified index
    return displayWord.substring(0, index) + guess + displayWord.substring(index + 1);
}

    // Update the word display in the DOM
    wordDisplay.textContent = displayWord;
    

// Starting a new game

