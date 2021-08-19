import { getRandomThrow, doesUserWin, displayOutcome, displayTotals, displayChoices, resetView } from './utils.js';
//doesUserWin(player, computer);

const subButton = document.querySelector('#sub-btn');
const resetButton = document.querySelector('#reset-btn');

let victories = 0;
let defeats = 0;
let draws = 0;
let reset = 0;

subButton.addEventListener('click', () => {
    let robotPicked = getRandomThrow();
    console.log('robot: ' + robotPicked); // *****DELETE THIS AT END
    let playerPicked = document.querySelector('input:checked').value;
    displayChoices(playerPicked, robotPicked);
    let playerFate = doesUserWin(playerPicked, robotPicked);
    displayOutcome(playerFate);
    incrementFate(playerFate);
    displayTotals(victories, defeats, draws, reset);
});

resetButton.addEventListener('click', () => {
    reset++;
    victories = 0;
    defeats = 0;
    draws = 0;
    displayTotals(victories, defeats, draws, reset);
    resetView();
});


function incrementFate(currentFate) {
    if (currentFate === 'win') {
        victories++;
    }
    if (currentFate === 'lose') {
        defeats++;
    }
    if (currentFate === 'draw') {
        draws++;
    }
}