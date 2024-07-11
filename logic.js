let humanScore=0;
let computerScore=0;
function playGame()
{
    for(let i=1;i<=5;i++)
    {
        console.log("Round "+i);
        console.log(playRound());
    }
    console.log("human score:"+(humanScore));
    console.log("computer score:"+(computerScore));
    if(humanScore>computerScore)
        return "human wins!";
    else if(computerScore>humanScore)
        return "computer wins!";
    else
        return "TIE";
}
function computerChoice()
{
    let a=Math.random();
    if(a<=1/3)
        return "rock";
    else if(a>2/3)
        return "paper";
    else
        return "scissors";
}
function humanChoice()
{
    let choice=prompt("enter choice");
    return choice;
}
function playRound()
{
    let a=humanChoice().toLowerCase();
    let b=computerChoice();
    if(a===b)
        return "tie!";
    else
    {
        if(a==="rock"&&b==="scissors")
        {
            humanScore++
            return a+" beats "+b;
        }
        if(a==="paper"&&b==="rock")
        {
            humanScore++
            return a+" beats "+b;
        }
        if(a==="scissors"&&b==="paper")
        {
            humanScore++
            return a+" beats "+b;
        }
        else
        {
            computerScore++;
            return b+" beats "+a;
        }
    }
}
console.log(playGame());