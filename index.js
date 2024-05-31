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

// getComputerChoice();

// *** Get Human Choice ***
function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?");
    let userInputLowCase = userInput.toLowerCase();

if (userInputLowCase == "rock") {
        return console.log("rock");
    } else if (userInputLowCase == "paper") {
        return console.log("paper");
    } else if (userInputLowCase == "scissors") {
        return console.log("scissors");
    } else if (userInputLowCase == null || userInputLowCase == '') {
        return alert("cancelled");
    } else {
        return alert("try again");
    }
}

// getHumanChoice();

// *** Single Round ***
function playRound(humanChoice, computerChoice) {
    
}