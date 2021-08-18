export { getRandomThrow, doesUserWin, displayOutcome };

const outcomeEl = document.querySelector('#outcome');

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