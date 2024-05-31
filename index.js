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