//Selectors
var displayRandomWord= document.getElementById("word-to-guess");
var displayIncorrectLetters= document.getElementById("incorrect-letters");
var displayPreviousWord= document.getElementById("previous-word");
var displayRemainingGuesses= document.getElementById("remaining-guesses");
var displayWins= document.getElementById("wins");
var displayLosses= document.getElementById("losses");

// do not change these words //
var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

function startGame(){
  //pick a random word from the array
  word = words[Math.floor(Math.random() * words.length)];
  console.log(word)
  //Incorrect Letters
  incorrectLetters=[];

  //establish answers
  answerArray = [];
    for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
  }

  displayRandomWord.innerHTML = answerArray.join('');
  remainingGuesses = 10;
  displayRemainingGuesses.innerHTML= remainingGuesses;
  displayIncorrectLetters.innerHTML=""
}
startGame()


document.addEventListener('keyup', function(e) {
    var guess = e.key

    if (remainingGuesses > 0) {

    // Update the game state
    var found = false
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        console.log(word[j])
        console.log("right")
        answerArray[j] = guess;
        displayRandomWord.innerHTML = answerArray.join('');

        found = true
      }
          else{
            console.log(word[j])
            console.log("wrong")

            incorrectLetters.push(guess);

          }

        }

        if (!found){
          displayIncorrectLetters.innerHTML += " " + guess;
          remainingGuesses -= 1
        } else if (displayRandomWord.innerHTML === word) {
          displayWins.innerHTML = parseInt(displayWins.innerHTML) + 1
          displayPreviousWord.innerHTML = word
          return startGame()
        }

        displayRemainingGuesses.innerHTML= remainingGuesses;

        if(remainingGuesses == 0) {
          displayLosses.innerHTML = parseInt(displayLosses.innerHTML) + 1
          return startGame()
        }

    }

})
