
// Define array of selections and the function used by the computer too select one.
const selections = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    let decision = selections[random];
    return decision;
};

function playerSelection() {
    let selection = prompt('Please enter rock, paper, or scissors', 'rock').toString().toLowerCase();
    return selection;
}

function check(selection) {
    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection;
    }
    alert('That was not a valid choice, the options are rock, paper or scissors');
    return result = 'invalid option';
    
}
 // List of possible outcomes assigned to variselectionables
const win = 'player wins';
const lose = 'player loses';
const tie = 'it is a tie';

// Paly game function calls the selection method for computer
function playGame() {
    let wins = 0;
    let losses = 0;
    let rounds = 0;
    
    do{
    let cp = computerPlay(); //computer selection
    let plr = playerSelection(); // player selection
    let result = check(plr);
  
    if (cp == 'rock' && cp !== plr) {
        if (plr == 'paper') {
            result = win;
            wins++;
            rounds++;
        }else if (plr == 'scissors') {
            result = lose;
            losses++;
            rounds++;
        }
    }else if (cp == 'paper' && cp !== plr) {
        if (plr == 'scissors') {
            result = win;
            wins++;
            rounds++;
        }else if (plr == 'rock') {
            result = lose;
            losses++;
            rounds++;
        }
    }else if (cp == 'scissors' && cp !== plr) {
        if (plr == 'rock') {
            result = win;
            wins++;
            rounds++;
        }else if (plr == 'paper') {
            result = lose;
            losses++;
            rounds++;
        }
    } else {
        result = tie;
        rounds++;
    }

    console.log(`results: ${result}, \nplayer total wins: ${wins}, \nplayer total losses: ${losses}, \ntotal played rounds: ${rounds}`);
    
}while(rounds <5);

}


