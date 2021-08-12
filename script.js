

// Define array of selections and the function used by the computer too select one.
const selections = ['rock', 'paper', 'scissors'];

 // List of possible outcomes assigned to variables
 const win = 'Win'; //'You WIN!!'
 const lose = 'Lose'; //'You LOSE!!'
 const tie = 'Tie'; // 'DRAW'

 // Match counters
 const wins = {
     wins : 0,
     get prop() {
         return this.wins;
     },
     set prop(newValue) {
        this.wins = newValue
     }
 };
 
 const losses = {
    losses : 0,
    get prop() {
        return this.losses;
    },
    set prop(newValue) {
       this.losses = newValue
    }
};

 const rounds = {
    rounds : 0,
    get prop() {
        return this.rounds;
    },
    set prop(newValue) {
       this.rounds = newValue
    }
};

// Decision logic for computer choice
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    let decision = selections[random];
    return decision;
};

function check(selection) {
    if (selection == "rock" || selection == "paper" || selection == "scissors") {
        return selection;
    }
    alert('That was not a valid choice, the options are rock, paper or scissors');
    return result = 'invalid option'; 
}

function playerSelection(e) {
    const button = this.id;
    playGame(button);
}


// Play game function calls the selection method for computer, 
//checks player selection,
//updates stats
function playGame(player) {

    let result = check(player);
    let cp = computerPlay(); //computer selection

    if (cp == 'rock' && cp !== player) {
        if (player == 'paper') {
            result = win;
            wins.prop ++;
            rounds.prop ++;
        }else if (player == 'scissors') {
            result = lose;
            losses.prop ++;
            rounds.prop ++;
        }
    }else if (cp == 'paper' && cp !== player) {
        if (player == 'scissors') {
            result = win;
            wins.prop ++;
            rounds.prop ++;
        }else if (player == 'rock') {
            result = lose;
            losses.prop ++;
            rounds.prop ++;
        }
    }else if (cp == 'scissors' && cp !== player) {
        if (player == 'rock') {
            result = win;
            wins.prop ++;
            rounds.prop ++;
        }else if (player == 'paper') {
            result = lose;
            losses.prop ++;
            rounds.prop ++;
        }
    } else {
        result = tie;
        rounds.prop ++;
    }

    played.textContent = "";
    played.textContent = `You ${result}`;
    _results.textContent = `results are in\nWins: ${wins.prop} Losses: ${losses.prop} Rounds: ${rounds.prop}`;
    notify.textContent += ` ${result}`;
    checkRounds();
    return;
}

function checkRounds() {
    if (rounds.prop > 5) {
        checkWinner();
    }
}
function checkWinner() {
    if (wins.prop > losses.prop) {
        played.textContent = "You Won The Game!!!";
    }else if(wins.prop < losses.prop){
    played.textContent = "You Lost The Game :(";
    }
    played.textContent = "It was a Tie :/"

    gameReset();
}
function gameReset() {
    wins.prop = 0;
    losses.prop = 0;
    rounds.prop = 0;
    _results.textContent = `results are in\nWins: ${wins.prop} Losses: ${losses.prop} Rounds: ${rounds.prop}`;
    notify.textContent = "Previous games:";

}

const _results = document.querySelector('.results');
_results.textContent = `First to 5 games wins`;

const played = document.querySelector('.played');

const notify = document.querySelector('.notify');
notify.textContent = 'Previous games:'

//select buttons and add events
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playerSelection));

// Research 
//  @keyframes
//      transition, transitionend, etc
//      transition with transform (transform responsible for rotation)
//  animations
//  setInterval()
//  accessing opacity through js (if necessary)
//  use of :hover etc
//  cubic bezier functions
