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
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();

if (humanChoice == "rock") {
        return console.log("rock");
    } else if (humanChoice == "paper") {
        return console.log("paper");
    } else if (humanChoice == "scissors") {
        return console.log("scissors");
    } else if (humanChoice == null || humanChoice == '') {
        return alert("cancelled");
    } else {
        return alert("try again");
    }
}

getHumanChoice();