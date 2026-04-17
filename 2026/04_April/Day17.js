const readlineSync = require("readline-sync");

function Board() {

  console.log(`----------------
  |${boardArray[0][0]} || ${boardArray[0][1]} || ${boardArray[0][2]}|
  |${boardArray[1][0]} || ${boardArray[1][1]} || ${boardArray[1][2]}|
  |${boardArray[2][0]} || ${boardArray[2][1]} || ${boardArray[2][2]}|
  ---------------`)
}

function UserInput(player, boardArray) {
  let choice = +readlineSync.question("Please enter a choice: ");

  if (isNaN(choice)) {
    console.log("Please enter a number not string. Please try again");
    return UserInput();
  }
  else {
    if (choice < 1 || choice > 9) {
      console.log("Input is not in perfect range");
      return UserInput();
    }

    else {

    }

    return { choice, player }
  };
}

function UserChoice() {
  switch (choice) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    default:
      break;
  }
}

let start = true;
let player = "X";

while (start) {
  //Take input form the user b

  let boardArray = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];
  let inp = UserInput(player, boardArray);
  console.log("User choice: ", inp);
}

Board()
