console.log('hello');
//a function for getting a computer choice.
function getComputerChoice() {
    const choice1 = "rock";
    const choice2 = "paper";
    const choice3 = "scissors";

    const randomValue = Math.floor((Math.random() * 100) + 1);
    //if the random value is even
    if (randomValue % 2 === 0 && randomValue % 4 === 0) {
        return choice1;
    } else if (randomValue % 2 === 0 && randomValue % 6 === 0) {
        return choice2;

    } else if (randomValue % 2 === 0 && randomValue % 8 === 0) {
        return choice3;

    } else if (randomValue % 2 === 0 && randomValue % 10 === 0) {
        return choice1;
        //if the value is odd
    } else if (randomValue % 2 !== 0 && randomValue % 3 === 0) {
        return choice2;
    } else if (randomValue % 2 !== 0 && randomValue % 5 === 0) {
        return choice3;
    } else if (randomValue % 2 !== 0 && randomValue % 7 === 0) {
        return choice1;
    } else if (randomValue % 2 !== 0 && randomValue % 9 === 0) {
        return choice2;
    } else if (randomValue % randomValue === 0 && randomValue / 1 === randomValue) {
        return choice3;
    }
}


//a function to return human choice.
function getHumanChoice() {
    let choice = prompt('Enter your choice:');
    choice = choice.toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log('try again.')
        choice = prompt("Enter 'rock','paper' or 'scissors' as a choice:");
    }
    return choice;


}



//a function for the whole game.
function playGame() {
    //variables to track the player and computer score.
    let humanScore = 0;
    let computerScore = 0;

    //a function made for a single round of play.
    function playround(computerChoice, humanChoice) {

        const computer = computerChoice();
        const human = humanChoice();

        if (human === 'paper' && computer === 'rock' ||
            human === 'scissors' && computer === 'paper' ||
            human === 'rock' && computer === 'scissors') {
            console.log(`Congratulations you won!!!! ${human}  against ${computer} this time.`);

            humanScore += 1;
        } else if (human === computer) {
            console.log(`You draw play again. ${human} and ${computer}`)

        } else {
            console.log(`You lost the computer wins this round! ${computer} wins against ${human} this time.`);
            computerScore += 1;
        }
        // console.log(computerScore);
        // console.log(humanScore);
    }
    for (let i = 0; i < 5; i++) {
        playround(getComputerChoice, getHumanChoice);
    }
    if (computerScore > humanScore){
        console.log(`The computer won! computer ${computerScore} and human ${humanScore}`)
    }else if(computerScore===humanScore){
        console.log(`The game ended in a draw. computer ${computerScore} and human ${humanScore}`)
    }else if(humanScore>computerScore){
        console.log(`Congratulations you won !!!!!! computer ${computerScore} and human ${humanScore}`)
    }
}

playGame();