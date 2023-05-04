const playerText = document.querySelector("#you");
const computerText = document.querySelector("#computer");
const choiceBtns = document.querySelectorAll(".btn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.value;
    document.getElementById("you").innerHTML = player;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Stone";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissor";
        break;
    }
    document.getElementById("computer").innerHTML = computer;
}
function checkWinner(){
    if(computer == player)
{
    document.getElementById("result").innerHTML = "Tie"
}
else if(player == "Stone" && computer == "Paper")
{
    document.getElementById("result").innerHTML = "Computer Wins"
}
else if(player == "Stone" && computer == "Scissor")
{
    document.getElementById("result").innerHTML = "You Win"
}
else if(player == "Paper" && computer == "Stone")
{
    document.getElementById("result").innerHTML = "You Win"
}
else if(player == "Paper" && computer == "Scissor")
{
    document.getElementById("result").innerHTML ="Computer Wins"
}
else if(player == "Scissor" && computer == "Paper")
{
    document.getElementById("result").innerHTML ="You Win"
}
else if(player === "Scissor" && computer === "Stone")
{
    document.getElementById("result").innerHTML ="Computer Wins"
}
}
