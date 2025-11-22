'use strict';
// Q3 – Transaction Validator
// Loop through transactions, throw custom errors for invalid entries, categorize in arrays.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {
  constructor(type, message) {
    super(message);
    this.name = 'TransactionError';
    this.type = type;
  }
}

const valid = [];
const invalid = [];

transactions.forEach((tx, idx) => {
  try {
    if (tx === null) throw new TransactionError('NullEntry', 'Transaction is null');
    if (!('id' in tx)) throw new TransactionError('MissingId', 'Missing id');
    if (!('amount' in tx)) throw new TransactionError('MissingAmount', 'Missing amount');
    if (typeof tx.amount !== 'number') throw new TransactionError('InvalidAmountType', 'Amount not number');
    if (tx.amount < 0) throw new TransactionError('NegativeAmount', 'Amount is negative');

    valid.push(tx);
  } catch (err) {
    if (err instanceof TransactionError) {
      invalid.push({ index: idx, type: err.type, message: err.message });
    } else {
      invalid.push({ index: idx, type: 'Unknown', message: err.message });
    }
  }
});

console.log('=== Q3 Transaction Validator ===');
console.log('Valid transactions:', valid);
console.log('Invalid transactions:', invalid);
console.log('Successful:', valid.length, 'Failed:', invalid.length);
// Note: Use debugger; to set breakpoint in browser/Node for watching variable states.
