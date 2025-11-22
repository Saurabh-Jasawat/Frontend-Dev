'use strict';
// Q6 – Pyramid Pattern Generator
// Generate a pyramid pattern. Allow outer loop limit via parameter (default 5).

function generatePyramid(limit = 5) {
  const lines = [];
  for (let i = 1; i <= limit; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      row.push('*');
    }
    lines.push(row.join(' '));
  }
  return lines.join('\n');
}

console.log('=== Q6 Pyramid Pattern (default limit=4 shown in task) ===');
console.log(generatePyramid(4));

// Observations: switching let->var changes scoping of loop variables (function-scoped vs block-scoped).
console.log('\nPyramid with limit=5:\n', generatePyramid(5));
