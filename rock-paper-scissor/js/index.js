const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const gameBtns = document.querySelectorAll('.game-btn')
let userChoice
let computerChoice
let result

gameBtns.forEach( btn => btn.addEventListener('click', (e) => {
    userChoice = e.target.innerText
    userChoiceDisplay.innerHTML = userChoice
    computerCalc()
    winCalc()
}))

function computerCalc(){
    const randomNumber = Math.floor(Math.random() * 3 ) + 1
    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
            break;
        
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissor'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function winCalc(){
    if(userChoice === computerChoice){
        result = 'its a draw!!!'
    }
    else if(userChoice === 'rock' && computerChoice === 'paper'){
        result = 'you lost!'
    }
    else if(userChoice === 'rock' && computerChoice === 'scissor'){
        result = 'you won!'
    }
    else if(userChoice === 'paper' && computerChoice === 'rock'){
        result = 'you won!'
    }
    else if(userChoice === 'paper' && computerChoice === 'scissor'){
        result = 'you lost!'
    }
    else if(userChoice === 'scissor' && computerChoice === 'rock'){
        result = 'you lost!'
    }
    else if(userChoice === 'scissor' && computerChoice === 'paper'){
        result = 'you won!'
    }
    resultDisplay.innerHTML = result
}