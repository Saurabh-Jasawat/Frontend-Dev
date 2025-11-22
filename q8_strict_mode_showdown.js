/* Q8 – Strict Mode Showdown
   This file demonstrates behavior differences; run both with and without 'use strict' to compare.
   We'll include a strict-mode example here.
*/
'use strict';
function demo(a, a2) {
  // Duplicate parameter names are not allowed in strict mode; modern JS disallows deleting variable identifiers.
  let total = 10;
  // delete total; // illegal in strict mode
  console.log('Params:', a, a2, 'total:', total);
}
console.log('=== Q8 Strict Mode Showdown ===');
demo(5, 10);

// Correct ES6 version (avoid duplicate params)
function demoCorrect(a, b) {
  let total = 10;
  console.log('demoCorrect', a, b, total);
}
demoCorrect(5, 10);
