console.log('hello');
function getComputerChoice() {
    const choice1 = "Rock";
    const choice2 = "Paper";
    const choice3 = "Scissors";

    const randomValue = Math.floor((Math.random() * 100) + 1);
    //if the random value is even
    if(randomValue%2===0 && randomValue%4===0){
        return choice1;
    }else if(randomValue%2===0 && randomValue%6===0){
        return choice2;

    }else if(randomValue%2===0 && randomValue%8===0){
        return choice3;
    
    }else if(randomValue%2===0 && randomValue%10===0){
        return choice1;
        //if the value is odd
    }else if(randomValue%2!==0 && randomValue%3===0){
        return choice2;
    }else if(randomValue%2!==0 && randomValue%5===0){
        return choice3;
    }else if(randomValue%2!==0 && randomValue%7===0){
        return choice1;
    }else if(randomValue%2!==0 && randomValue%9===0){
        return choice2;
    }else if(randomValue%randomValue===0 && randomValue/1=== randomValue){
        return choice3;
    }
}

for(let i=0; i<20; i++){
    console.log(getComputerChoice());
}


