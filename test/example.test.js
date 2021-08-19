// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { doesUserWin } from '../utils.js';

const test = QUnit.test;

test('rock vs rock', (expect) => {
    expect.equal(doesUserWin('rock', 'rock'), 'draw');
});

test('scissors vs scissors', (expect) => {
    expect.equal(doesUserWin('scissors', 'scissors'), 'draw');
});

test('paper vs paper', (expect) => {
    expect.equal(doesUserWin('paper', 'paper'), 'draw');
});
//win
test('rock vs scissors', (expect) => {
    expect.equal(doesUserWin('rock', 'scissors'), 'win');
});

test('scissors vs paper', (expect) => {
    expect.equal(doesUserWin('scissors', 'paper'), 'win');
});

test('paper vs rock', (expect) => {
    expect.equal(doesUserWin('paper', 'rock'), 'win');
});
//lose
test('rock vs paper', (expect) => {
    expect.equal(doesUserWin('rock', 'paper'), 'lose');
});

test('scissors vs rock', (expect) => {
    expect.equal(doesUserWin('scissors', 'rock'), 'lose');
});

test('paper vs scissors', (expect) => {
    expect.equal(doesUserWin('paper', 'scissors'), 'lose');
});




