// *** Global ***
const playRock = "rock";
const playPaper = "paper";
const playScissors = "scissors";

const humanScore = 0;
const computerScore = 0;

// *** Get Computer Choice ***
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            return console.log(playRock);
            break;
        case 1:
            return console.log(playPaper);
            break;
        case 2:
            return console.log(playScissors);
            break;
    }
}

getComputerChoice();

// *** Get Human Choice ***
function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?").toLowerCase();

if (userInput == "rock") {
        return console.log(playRock);
    } else if (userInput == "paper") {
        return console.log(playPaper);
    } else if (userInput == "scissors") {
        return console.log(playScissors);
    } else {
        return console.log("Try again.")
    }
}

getHumanChoice();

// *** Single Round ***
