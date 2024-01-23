//Setting up the buttons
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");


rockBtn.addEventListener("mouseover", () => {
    rockBtn.classList.add("onIt");
})
rockBtn.addEventListener("mouseout", () => {
    rockBtn.classList.remove("onIt");
})

paperBtn.addEventListener("mouseover", () => {
    paperBtn.classList.add("onIt");
})
paperBtn.addEventListener("mouseout", () => {
    paperBtn.classList.remove("onIt");
})

scissorsBtn.addEventListener("mouseover", () => {
    scissorsBtn.classList.add("onIt");
})
scissorsBtn.addEventListener("mouseout", () => {
    scissorsBtn.classList.remove("onIt");
})

//Setting the computer's turn value
const playComp = () => {
    let x = Math.floor(Math.random() * 3) + 1;
    return x;
}

//Displaying the Computer's choice
const dispCompChoice = () => {
    if (compAction === 1){
        document.querySelector("#compChoice").innerText = "Computer chose Rock"
    }
    if (compAction === 2){
        document.querySelector("#compChoice").innerText = "Computer chose Paper"
    }
    if (compAction === 3){
        document.querySelector("#compChoice").innerText = "Computer chose Scissors"
    }
}

//Adding functionality
let compAction = playComp();
let userAction;
let userScore = 0;
let compScore = 0;

rockBtn.addEventListener("click", () => {
    document.querySelector("#userChoice").innerText = "You chose Rock";
    dispCompChoice();
    userAction = 1;
    if(compAction === 3){
        userScore++;
        document.querySelector("#message").innerText = "You won!";
    }
    if(compAction === 2){
        compScore++;
        document.querySelector("#message").innerText = "You lost";

    }
    if(compAction === userAction){
        document.querySelector("#message").innerText = "It's a Draw";
    }
    document.querySelector("#userScoreDisp").innerText = userScore;
    document.querySelector("#compScoreDisp").innerText = compScore;
    compAction = playComp();
})

paperBtn.addEventListener("click", () => {
    document.querySelector("#userChoice").innerText = "You chose Paper";
    dispCompChoice();
    userAction = 2;
    if(compAction === 1){
        userScore++;
        document.querySelector("#message").innerText = "You won!";
    }
    if(compAction === 3){
        compScore++;
        document.querySelector("#message").innerText = "You lost";
    }
    if(compAction === userAction){
        document.querySelector("#message").innerText = "It's a Draw";
    }
    document.querySelector("#userScoreDisp").innerText = userScore;
    document.querySelector("#compScoreDisp").innerText = compScore;
    compAction = playComp();
})

scissorsBtn.addEventListener("click", () => {
    document.querySelector("#userChoice").innerText = "You chose Scissors";
    dispCompChoice();
    userAction = 3;
    if(compAction === 2){
        userScore++;
        document.querySelector("#message").innerText = "You won!";
    }
    if(compAction === 1){
        compScore++;
        document.querySelector("#message").innerText = "You lost";
    }
    if(compAction === userAction){
        document.querySelector("#message").innerText = "It's a Draw";
    }
    document.querySelector("#userScoreDisp").innerText = userScore;
    document.querySelector("#compScoreDisp").innerText = compScore;
    compAction = playComp();
})



const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

