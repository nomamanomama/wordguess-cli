// * ** index.js **: The file containing the logic for the course of the game, which depends on`Word.js` and:
var Word = require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");
var numGuesses = 10;
var guessWord;
var wordList = require('./wordlist.js');
var word;

// * Randomly selects a word and uses the`Word` constructor to store it
function selectGameWord()
{
    guessWord = wordList[Math.floor(Math.random() * wordList.length)];
    //console.log("Selected: " + guessWord);
    word = new Word(guessWord);
    //console.log("Gameword: " + word.gameWord);
}

// * Prompts the user for each guess and keeps track of the user's remaining guesses
function initGame(){
    selectGameWord();
    //console.log("Converted to gameWord: " + word);
    word.displayWord();
    numGuesses = 10;
    promptGuess();
}

function promptGuess()
{
    inquirer.prompt([
        {
            type: "input",
            message: `Guess a Letter! You've got ${numGuesses} guesses.`,
            name: "guess"
        }

    ]).then(answers => {
        //console.log("Guessed: " + answers.guess + " of gameWord: " + word);
        // Use user feedback for... whatever!!
        debugger;
        //console.log("converting letter: " + answers.guess.toUpperCase());
        word.processGuess(answers.guess.toUpperCase());
        numGuesses--;
        word.displayWord();
        if (numGuesses > 0 && !word.isSolved()) {
            console.log (`\nKeep going! You've got ${numGuesses} guesses left\n`);
            promptGuess();
        }
        else {
            if (word.isSolved()){
                console.log(`\nGood Job! let's play again\n`);
            }
            else{
                console.log(`\nSorry. Out of guesses. The correct word was ${guessWord}\n`);
                console.log(`Let's play again\n`);
            }
            initGame();
        }
    });
}

initGame();