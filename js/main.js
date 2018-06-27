console.log('connected');

function startGame() {
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + "  start's first.")
}

function setMessage(msg) {
  $('#message').text(msg);
}

function nextMove(square) {
  if(document.winner != null) {
    setMessage(document.turn + "already won.")
  } else if(square.innerText == '') {
  square.innerText = document.turn;
  switchTurn();
  } else {
    setMessage('Pick another square');
  }
}

function switchTurn() {
  if(checkForWinner(document.turn)) {
    setMessage("Congratulations" + document.turn +  "you have won.")
  } else if(document.turn == "X") {
    document.turn = "0";
    setMessage("It's " + document.turn + "'s Turn.")
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s Turn.")
  }

}

const checkRow = function (a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById('s' + number).innerText;
}

function checkForWinner(move) {
  var result = false;
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
