import { getRandomThrow, doesUserWin, displayOutcome} from './utils.js';
//doesUserWin(player, computer);

const subButton = document.querySelector('#sub-btn');


subButton.addEventListener('click', () => {
    let robotPicked = getRandomThrow();
    console.log('robot: ' + robotPicked); // *****DELETE THIS AT END
    let playerPicked = document.querySelector('input:checked').value;
 
    let playerFate = doesUserWin(playerPicked, robotPicked);
    displayOutcome(playerFate);
});

// function incrementFate(currentFate) {
//   if(currentFate === 'win') {

//   }
// }