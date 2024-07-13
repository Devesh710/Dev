let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinning = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win" ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate compute choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                // peper, scissors
              userWin = compChoice === "peper"? false : true;
            }else if(userChoice === "peper"){
                // rock, scissors
                userWin = compChoice === "scissors"? false : true;
            }else{
                // rock, paper
                userWin = compChoice === "rock"? false : true;
            }
            showWinning(userWin);
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});