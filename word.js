// * ** Word.js **: Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:

require("./letters.js");

function Word (word) {
// * An array of`new` Letter objects representing the letters of the underlying word
    this.gameWord = [];
    this.gameWord.push(word.forEach(element=> new Letter(element)));

// * A function that returns a string representing the word.This should call the function on each letter object(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayWord = function(){
        var display = "";
        this.gameWord.forEach(element => display += element.getDisplayVal());
    }

// * A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in `Letter.js`)
    this.processGuess = function(letter){
        this.gameWord.forEach(element=>element.processGuess(letter));
    }
}