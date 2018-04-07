// * ** Word.js **: Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:

var Letter = require("./letters.js");

function Word(word) {
// * An array of`new` Letter objects representing the letters of the underlying word
    this.gameWord = [];
    word.split('').forEach(element => 
        this.gameWord.push(new Letter(element))
        );

// * A function that returns a string representing the word.This should call the function on each letter object(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayWord = function(){
        var display = "";
        this.gameWord.forEach(element => display += element.getDisplayVal() + " ");
        console.log(display);
    }

// * A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in `Letter.js`)
    this.processGuess = function(letter){
        this.gameWord.forEach(element=>{
            if(!element.guessed){
                element.processGuess(letter);
            }
        });
    }

    //create a function to 
    this.isSolved = function(){
        var result = true;
        for(var i = 0; i<this.gameWord.length; i++)    
        {        
            if (!this.gameWord[i].guessed)
            {
                result = false;
                break;
            }
        }
        return(result);
    }
}

module.exports = Word;