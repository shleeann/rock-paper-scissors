// *** Global ***
const humanScore = 0;
const computerScore = 0;

// *** Get Computer Choice ***
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            return console.log("rock");
            break;
        case 1:
            return console.log("paper");
            break;
        case 2:
            return console.log("scissors");
            break;
    }
}

getComputerChoice();

// *** Get Human Choice ***
function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?").toLowerCase();

if (userInput == "rock") {
        return console.log("rock");
    } else if (userInput == "paper") {
        return console.log("paper");
    } else if (userInput == "scissors") {
        return console.log("scissors");
    } else if (userInput == null || userInput == "") {
        return alert("Cancelled.");
    } else {
        return alert("Try again.");
    }
}

getHumanChoice();

// *** Single Round ***
