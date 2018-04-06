// * ** index.js **: The file containing the logic for the course of the game, which depends on`Word.js` and:
require("./word.js");
var inquirer = require("inquirer");
var fs = require("fs");
var numGuesses = 10;
var wordList = ["Beethoven", "Bach", "Rachmaninov", "Chopan"];
var gameWord;

// * Randomly selects a word and uses the`Word` constructor to store it
function selectGameWord()
{
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    gameWord = new Word(word);
}

// * Prompts the user for each guess and keeps track of the user's remaining guesses
function initGame(){
    selectGameWord();
    gameWord.displayWord();
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter?",
            name: "guess"
        }

    ]).then(answers => {
        // Use user feedback for... whatever!!
        gameWord.processGuess(answers.guess);
        numGuesses--;
        gameWord.displayWord();
    });
}