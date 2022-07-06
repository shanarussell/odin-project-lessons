let computerSelection = '';
let playerSelection = '';
let winner = '';
computerPlay();
playerSelectionPrompt();
playRound(playerSelection, computerSelection);



function computerPlay(){
    let answerArray = ['rock', 'paper', 'scissors'];
    computerSelection = answerArray[Math.floor(Math.random() * answerArray.length)];
    console.log(computerSelection)
    return computerSelection;
}
 
function playerSelectionPrompt(){
    playerSelection = 'paper';
    console.log(playerSelection);
    return playerSelection;
}



function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log('A tie!');
    }

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')){
        console.log('You Win!');
    }

    if((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')){
        console.log('Computer Wins!');
    }
}

    

