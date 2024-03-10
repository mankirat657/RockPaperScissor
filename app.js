const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll(".button")
const userScore = document.querySelector(".user")
const cpuScore = document.querySelector(".computer")
const totalRounds = document.querySelector(".rounds")
const congo = document.querySelector('.congractulations')
const retry = document.querySelector('.retry')
let choiceuser;
let choiceComputer;
let Finalresult;
let score = 0
let sysScore = 0;
let round= 0;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    choiceuser = e.target.id
    userChoice.innerHTML = choiceuser
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
        choiceComputer = "rock"
    } else if (randomNumber === 2) {
        choiceComputer = "scissors"
    } else if (randomNumber === 3) {
        choiceComputer = "paper"
    }
    computerChoice.innerHTML = choiceComputer;
}

function getResult() {
    if (choiceComputer === choiceuser) {
        Finalresult = "Sadly It's a draw!";
        totalRounds.innerHTML = "Round " +  ++round
    } else if (choiceComputer === 'rock' && choiceuser === 'paper') {
        Finalresult = "You win by luck!";
        userScore.innerHTML = "U-" + ++score;
        totalRounds.innerHTML = "Round " +   ++round
    } else if (choiceComputer === 'rock' && choiceuser === 'scissors') {
        Finalresult = "You lost no skills!";
        cpuScore.innerHTML ="C-" + ++sysScore;
        totalRounds.innerHTML ="Round " +   ++round
    } else if (choiceComputer === 'paper' && choiceuser === 'scissors') {
        Finalresult = "You win by luck!";
        userScore.innerHTML ="U-" +  ++score;
        totalRounds.innerHTML ="Round " +   ++round
    } else if (choiceComputer === 'paper' && choiceuser === 'rock') {
        Finalresult = "You lost no skills!";
        cpuScore.innerHTML ="C-" +  ++sysScore;
        totalRounds.innerHTML ="Round " +   ++round
        
    } else if (choiceComputer === 'scissors' && choiceuser === 'rock') {
        Finalresult = "You win by luck!";
        userScore.innerHTML ="U-" +  ++score;
        totalRounds.innerHTML ="Round " +   ++round
    } else if (choiceComputer === 'scissors' && choiceuser === 'paper') {
        Finalresult = "You lost no skills!";
        cpuScore.innerHTML ="C-" +  ++sysScore;
        totalRounds.innerHTML ="Round " +  ++round
        
    }

    result.innerHTML = Finalresult;
    Win()
}
function Win() {
    if (totalRounds.innerHTML === "Round 11") {
        totalRounds.innerHTML = "Round 0";
        round = -1;
        getResult();
        // Extract scores from inner HTML
        const userScoreValue = parseInt(userScore.innerHTML.split('-')[1]);
        const cpuScoreValue = parseInt(cpuScore.innerHTML.split('-')[1]);

        if (userScoreValue > cpuScoreValue) {
            congo.style.visibility = "visible";
            congo.style.bottom = "unset";
            congo.innerHTML = "🎉🥳 You win!";
        } else if (userScoreValue < cpuScoreValue) {
            congo.style.visibility = "visible";
            congo.style.bottom = "0";
            congo.innerHTML = "🎉🥳 You lose";
        } else {
            congo.style.visibility = "visible";
            congo.style.bottom = "unset";
            congo.innerHTML = "😮‍💨 So Close";
        }
    }

    if (totalRounds.innerHTML === "Round 10") {
        // Extract scores from inner HTML
        const userScoreValue = parseInt(userScore.innerHTML.split('-')[1]);
        const cpuScoreValue = parseInt(cpuScore.innerHTML.split('-')[1]);

        if (userScoreValue > cpuScoreValue) {
            congo.style.visibility = "visible";
            congo.style.bottom = "unset";
            congo.innerHTML = "🎉🥳 You win!";
        } else if (userScoreValue < cpuScoreValue) {
            congo.style.visibility = "visible";
            congo.style.bottom = "unset";
            congo.innerHTML = "🎉🥳 You lose";
        } else {
            congo.style.visibility = "visible";
            congo.style.bottom = "unset";
            congo.innerHTML = "😮‍💨 So Close";
        }

        retry.innerHTML = "Try Again Loser";
    }

    if (totalRounds.innerHTML === "Round 0") {
        score = 0;
        sysScore = 0;
        userScore.innerHTML = "U-0";
        cpuScore.innerHTML = "C-0";
        congo.style.visibility = "hidden";
    }
}

    retry.addEventListener("click",()=>{
        totalRounds.innerHTML = "Round 0"
        score = 0
        sysScore = 0
        userScore.innerHTML = "U-0"
        cpuScore.innerHTML = "C-0"
        congo.style.visibility = "hidden";
        congo.style.bottom = "0"
    })

