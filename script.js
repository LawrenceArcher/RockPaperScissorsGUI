let playerScore = 0;
let computerScore = 0;
let computerPlay = () => {
    let a = Math.random()*3;
    switch (true) {
        case a < 1:
            return "rock";
            break;
        case a < 2:
            return "paper";
            break;
        case a < 3:
            return "scissors";
            break;
        default:
            console.log("Problem with computer move");
    }
};
let playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt("make your choice").toLowerCase(); //should sanitise inputs and take away anything that isn't "rock", "paper", or scissors
    console.log(playerSelection);
    computerSelection = computerPlay();
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            alert("draw");
        }else if (computerSelection == "paper"){
            alert("You lose! Paper beats rock");
            computerScore++;
        }else if (computerSelection == "scissors"){
            alert("You win! Rock beats scissors");
            playerScore++;
        }else {
            console.log("error in inside if statement, rock - roundRPS");
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            alert("You win! Paper beats rock");
            playerScore++;
        }else if (computerSelection == "paper"){
            alert("draw");
        }else if (computerSelection == "scissors"){
            alert("You lose! Scissors beat paper");
            computerScore++;
        }else {
            console.log("error in inside if statement, paper - roundRPS");
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            alert("You lose! Rock beats scissors");
            computerScore++;
        }else if (computerSelection == "paper"){
            alert("You win! Scissors beat paper");
            playerScore++;
        }else if (computerSelection == "scissors"){
            alert("draw");
        }else {
            console.log("error in inside if statement, scissors - roundRPS");
        }
    }else{
        console.log("error in outside if statement - roundRPS");
    }
};
let playGame = () => {

    playRound();
    console.log("Player score: " +playerScore+ " & computer score: "+computerScore);

};
let reset = () => {
    computerScore = 0;
    playerScore = 0;
}