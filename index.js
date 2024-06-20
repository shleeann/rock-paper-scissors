// *** Global Variables ***
const humanScore = 0;
const computerScore = 0;

// *** Get Computer Choice ***
function getComputerChoice() {
    const computerInput = Math.floor(Math.random() * 3);

    switch(computerInput) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

// *** Get Human Choice ***
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toUpperCase();
}

// *** Play Single Round ***
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return `Draw.`;
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK") {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        return `Cannot compute ${humanChoice}.`;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));