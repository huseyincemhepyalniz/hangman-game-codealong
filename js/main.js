
//Question to appear

let question = document.getElementById('question1');

question.innerHTML = "It's a well-known dish in Europe, any ideas?";

//European Dishes Words

let europeanDishes = ["Paella", "Croissant", "Pizza", "Bratwurst", "Schnitzel", "Goulash", "Tiramisu", "Ratatouille"];

//Random Word Selection
let wordToGuess;
function randomWordSelection() {
    const randomIndex = Math.floor(Math.random() * europeanDishes.length);
    let wordToGuess = europeanDishes[randomIndex];
    console.log(wordToGuess);

}


//Game Variables

let lettersGuessed = [];
let attemptsRemaining = 7;


function updateWordDisplay() {
    const wordDisplay = document.getElementById("word-display");
}













