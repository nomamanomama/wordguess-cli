// * ** Letter.js **: Contains a constructor, Letter.This constructor should be able to either display an underlying character or a blank placeholder(such as an underscore), depending on whether or not the user has guessed the letter.That means the constructor should define:


function Letter(letter) {

    // * A string value to store the underlying character for the letter
    this.charVal = letter;
    
    // * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    // * A function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
    this.getDisplayVal = function () {
        if(this.guessed)
            return this.charVal;
        else    
            return "_";    
    }

    // * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.processGuess = function(letter){
        this.guessed = (letter === this.charVal);
        //console.log(this.charVal + "guessed = " + this.guessed);
        
    }
}

module.exports = Letter;