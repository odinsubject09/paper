let humanScore = 0;
let computerScore = 0;

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playGame("scissors"));

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playGame("paper"));

let i=0;
function playGame(humanChoice) {
    const webdiv=document.querySelector("div");
    const resultString=playRound(humanChoice);
    const div=document.createElement("div");
    const round=document.createElement("div");
    round.textContent="round:"+(i);
    webdiv.appendChild(round);
    div.textContent=resultString;
    webdiv.appendChild(div);
    const result=document.createElement("div");
    if (humanScore > computerScore)
    {
        result.textContent="human wins!";
    }
    else if (computerScore > humanScore)
    {
        result.textContent="computer wins!";
    }
    else
    {
        result.textContent="TIE!";
    }
    webdiv.appendChild(result);
}

function computerChoice() {
    let a = Math.random();
    if (a <= 1 / 3)
        return "rock";
    else if (a > 2 / 3)
        return "paper";
    else
        return "scissors";
}

function playRound(humanChoice) {
    let a = humanChoice.toLowerCase();
    let b = computerChoice();
    i++;
    if (a === b)
        return "tie!";
    else {
        if (a === "rock" && b === "scissors") {
            humanScore++
            return a + " beats " + b;
        }
        if (a === "paper" && b === "rock") {
            humanScore++
            return a + " beats " + b;
        }
        if (a === "scissors" && b === "paper") {
            humanScore++
            return a + " beats " + b;
        } else {
            computerScore++;
            return b + " beats " + a;
        }
    }
}
