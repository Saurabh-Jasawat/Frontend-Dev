'use strict';
// Q5 – Hoisting Lab: The Sequence Trap
// Original problematic code used var and function hoisting plus temporal dead zone for let.
//
// We'll explain hoisting comments and provide corrected versions and arrow-function version.

console.log('=== Q5 Hoisting Lab ===');

console.log('Prediction: var declarations hoisted but initialized as undefined. Function declarations hoisted. let in TDZ.');

// Corrected version to avoid TDZ / undefined surprises
var score = 50;
function announce() { console.log('Game started'); }
let status = 'ready';
function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function version (demonstrates that function expressions are not hoisted):
const score2 = 100;
const announce2 = () => console.log('Game started (arrow)');
const startGame2 = () => console.log('ready (arrow)');
console.log(score2);
announce2();
startGame2();
