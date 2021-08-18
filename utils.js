export { getRandomThrow, doesUserWin, displayOutcome, displayTotals, displayChoices };

const outcomeEl = document.querySelector('#outcome');
const victoriesEl = document.querySelector('#victories');
const defeatsEl = document.querySelector('#defeats');
const drawsEl = document.querySelector('#draws');
const userChoice = document.querySelector('#user-choice');
const robotChoice = document.querySelector('#robot-choice');
const choicesDisplay = document.querySelector('.choices-display');

const choiceArr = ['rock', 'paper', 'scissors'];

function getRandomThrow() {
    let arrIndex = Math.round(Math.random() * 2);
    return choiceArr[arrIndex];
}

function doesUserWin(player, computer) {
 
    if (player === computer) {
        return 'draw';
    }

    if (player === 'rock') {
        return (computer === 'scissors' ? 'win' : 'lose');
    }

    if (player === 'paper') {
        return (computer === 'rock' ? 'win' : 'lose');
    }

    if (player === 'scissors') {
        return (computer === 'paper' ? 'win' : 'lose');
    }
}

function displayOutcome(winLoseDraw) {
    outcomeEl.textContent = `You ${winLoseDraw}!`;
}

function displayTotals(win, lose, draw) {
    victoriesEl.textContent = win;
    defeatsEl.textContent = lose;
    drawsEl.textContent = draw;
}

function displayChoices(person, machine) {
    userChoice.src = `./assets/${person}-pic.png`;
    robotChoice.src = `./assets/${machine}-pic.png`;
    choicesDisplay.classList.remove('hidden');
}