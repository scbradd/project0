console.log('connected');

var turn ="X";
var winner = null;
var moves = 0; // count of how many moves have been made

// Start game function
// Prepares the program for a new game. this includes:
// - setting X to be the next Turn.
// - Setting winner to be Null.
// - Set move count back to zero.
function startGame() { //set up game to start playing.
  turn = "X";         //reset its starting state, its the first player because ive set it as the first player.
  winner = null;      //
  moves = 0; // reset moves counter
  setMessage(turn + "  start's first.") //determines that X starts first every time
  //$(".square").click(nextMove);
  $(".square").on("click", nextMove).html("") //click on square (event listener) when its got a click it runs next move.
// before the dot is doing something and that returns the object. (in jQuery case whatever you put inside the parenthasis is the css selctor for that element in your html)
}   //.html("") makes sure there is nothing in the square.

//in the order in which this executes is to interact with the page which is the click.


function setMessage(msg) {  // worker function does something when you ask it too.
  $('#message').text(msg);
}

// 16 >>the user interacts with the page by clicking
// nextMove()
//Gets called using jquery every time user clicks on a square. It:
//- checks if game is already won.
//- checks what is in the square (this.innerText)
//-- if empty, sets square to have X or O based on 'turn' and switches turn
//-- if not empty, asks to pick another square.
//
//'this' refers to the square that was clicked
//
function nextMove() {  //whenever click on any square will trigger this function

  // If there is already a winner ...
  if(winner != null) { // this run each time there is a click ........ if the winner is not equal t null then someone has already wn the game. but if its not true it will run the else if.
    setMessage(turn + "already won.") //  maybe be in correct but who cares at this moment because this shit works.
  } else if(this.innerText == '') {
    // If there isn't a winner and the square is free ...
    //if its an empty space then its the other persons turn if not then you cant use it.
  this.innerText = turn; //fills square with the 'X' or 'O' depending on 'turn'.
  moves++; // increment move count by 1, equivlent to moves = moves + 1;
  switchTurn();  // utilises the switchturn function call and takes from X-0-X
} else { // If there isn't a winner but the square isn't free ...
    setMessage('Pick another square');``
  } ///next move determining the next player.  based on the calls from the function to next move we highlight this with the setmessage function from a visual aspect. we are playing turn into the square and turn will be whoever x or o whoevers turn it will be.
}

// switchTurn()
//Runs every time a valid move is made. It:
//- Checks if game has been won.
//-- If so, it congratualates the winner.
//- else, it changes the turn to the next player and updates the message.
//
function switchTurn() {  //  only runs nce each time somene clicks it . based on clicks.

  // If game has been won...
  if(checkForWinner(turn)) { //(turn is info your giving to the function)
    setMessage("Congratulations " + turn +  ", you have won in " + moves + " moves.")
    $(".square").off("click", nextMove) // stop listening for clicks once game is won
  } else if(turn == "X") { // If game has not been won ...
    turn = "0";
    setMessage("It's " + turn + "'s Turn.")
  } else {
    turn = "X";
    setMessage("It's " + turn + "'s Turn.")
  }

}

const checkRow = function (a, b, c, move) {   //checks row- takes arguments, abc move. Compares the boxes by calling the getbox.
  var result = false; //default value - set nothing
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) { //calls get box to get the values -
    result = true; // boolean //
  }
  return result;
} // checks the rows and calls getbox which returns the value of the square and compares them.

// getBox()
// when getbox is called, it returns the value of the element ( if its an x or an o )
// getbox is essentially  getting the vlaue htats in the square aka box.
function getBox(number) {   // return the value of the element (x or o) . the (number is the id of the square) which gives us the value
  return document.getElementById('s' + number).innerText; //s is the id number
}

// checkForWinner(move)
// Check if any rows, columns or diagonals contain all of the same values as 'move'
// returns true or false depending on if game is won.
function checkForWinner(move) { // move basically checks the infomration that your giving ie X or O.
  var result = false; //default value
  if (checkRow(1, 2, 3, move) ||
  (checkRow(4, 5, 6, move)) ||
  (checkRow(7, 8, 9, move)) ||
  (checkRow(1, 4, 7, move)) ||
  (checkRow(2, 5, 8, move)) ||
  (checkRow(3, 6, 9, move)) ||
  (checkRow(1, 5, 9, move)) ||
  (checkRow(3, 5, 7, move))) {
  result = true;
}
console.log(result);
return result;
}


//adding an attribute to the document
