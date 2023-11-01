
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




// we create array letterToGuess []  --> p, i, z, z, a
let lettersToGuess = [];


//Updating the word display//
for (let i = 0; i < wordToGuess.length; i++) {
    lettersToGuess.push(wordToGuess[i]);
}
// let user to see = '_ _ _ _ _'
let wordInUnderline = "_ ".repeat(wordToGuess.length);

// for each letterToGuess display _ in the dom
const wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = wordInUnderline;

// get user input: use an <input> or get a keyboard event.
const letterInput = document.getElementById("letter-input");
const enterButton = document.getElementById("enter-button");
enterButton.addEventListener("click", function () {
    const inputLetter = letterInput.value;
    if (inputLetter.length !== 1 || !/[a-z]/.test(inputLetter)) {
        // Check if the input is a single letter from a to z
        letterInput.value = ""; // Clear the input field
        return;
    }

    guessTheLetter(inputLetter);
    letterInput.value = ""; //input field for the next guess

    // Update the word display in the DOM
    wordDisplay.textContent = wordInUnderline;
});



function guessTheLetter(guess) {
    // Check if the guessed letter is in the word
    let letterFound = false;

    const attemptsCounter = document.getElementById("attempts-counter");
      //remember to update the rounds here
  
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
            // If the guessed letter matches a letter in the word,
            // update the wordInUnderline at the corresponding position
            wordInUnderline = updateWordInUnderline(wordInUnderline, guess, i);
            letterFound = true;
        }
    }
    if (letterFound === false) {
        attemptsRemaining--;
        console.log(attemptsRemaining);
        attemptsCounter.innerText = attemptsRemaining
    }
    console.log("HEREEEE")
    checkGameOver()
}



function updateWordInUnderline(wordInUnderline, guess, index) {
    // Create a new wordInUnderline with the guessed letter at the specified index
    const wordAsArray=wordInUnderline.split(" ")
     wordAsArray[index]=guess
    const joinedWords= wordAsArray.join(" ")
    console.log("im here ",joinedWords,index)
    return joinedWords
   
}

// Update the word display in the DOM
wordDisplay.textContent = wordInUnderline;


// Checking if the game is over


function checkGameOver() {
    console.log("Inside checkGameOVER",wordInUnderline,wordToGuess);
const wordWithoutSpaces=wordInUnderline.replace(/\s+/g, '')
console.log("without",wordWithoutSpaces)
    if (attemptsRemaining === 0) {
        console.log("Game Over! You lost");
        document.getElementById("feedback").textContent = "Game Over! You lost."
    } else if (wordWithoutSpaces === wordToGuess) {
        console.log("Congrats! You won");
        document.getElementById("feedback").textContent = "Congrats! You won"
    }
}

