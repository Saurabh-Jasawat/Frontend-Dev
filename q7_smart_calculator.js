'use strict';
// Q7 – Smart Calculator
// Handle operations with switch and custom error handling.

class InvalidOperationError extends Error {
  constructor(op) {
    super(`Invalid operation: ${op}`);
    this.name = 'InvalidOperationError';
    this.op = op;
  }
}

function smartCalc(operation, a, b) {
  try {
    let result;
    switch (operation) {
      case 'add': result = a + b; break;
      case 'subtract': result = a - b; break;
      case 'divide':
        if (b === 0) throw new Error('DivideByZero');
        result = a / b; break;
      case 'power': result = Math.pow(a, b); break;
      case 'root':
        if (a < 0) throw new Error('RootOfNegative');
        result = Math.pow(a, 1 / b); break;
      default: throw new InvalidOperationError(operation);
    }
    console.log(`Operation: ${operation} | a=${a} b=${b} => result=${result}`);
    return result;
  } catch (err) {
    console.error('Calculator error ->', err.name, err.message);
  }
}

console.log('=== Q7 Smart Calculator ===');
smartCalc('add', 10, 5);
smartCalc('divide', 10, 0);
smartCalc('root', -4, 2);
smartCalc('unknown', 2, 3);
