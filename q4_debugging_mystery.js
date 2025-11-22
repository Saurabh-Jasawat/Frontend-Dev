'use strict';
// Q4 – Debugging Mystery
// Original code would throw because 'greeting' was assigned without declaration in strict mode.
// Fix by declaring greeting with let/var/const inside function.

function showMessage() {
  // Previously: greeting = 'Welcome'; // ReferenceError in strict mode
  let greeting = 'Welcome'; // declare variable properly
  console.log('Inside showMessage, greeting=', greeting);
}

console.log('=== Q4 Debugging Mystery ===');
showMessage();

// Explanation (console): Under strict mode, assigning to an undeclared identifier is a ReferenceError.
// Declaring the variable creates it in the local scope and avoids polluting global scope.
