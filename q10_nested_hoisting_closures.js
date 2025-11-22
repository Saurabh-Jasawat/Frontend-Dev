'use strict';
// Q10 – Nested Hoisting and Closures
// Demonstrate hoisting behavior and closures with nested functions.

function outer() {
  console.log('outer - count (hoisted var):', count); // undefined due to hoisting of var count
  var count = 5;
  function inner() {
    console.log('inner - before declaration, count (hoisted var):', count); // undefined due to inner var hoisting
    var count = 10;
    console.log('inner - after declaration, count =', count);
  }
  inner();
  console.log('outer - after inner, count =', count);
}

console.log('=== Q10 Nested Hoisting & Closures ===');
outer();

// Arrow function variation for inner (no hoisting of var inside arrow if using let/const):
function outerArrow() {
  var count = 5;
  const innerArrow = () => {
    // const/let not hoisted like var; would reference outer's count if not re-declared.
    console.log('innerArrow sees outer count =', count);
  };
  innerArrow();
}
outerArrow();
