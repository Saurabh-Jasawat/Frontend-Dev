'use strict';
// Q9 – JSON Audit
// Parse raw JSON strings, detect missing keys, log errors with line numbers, convert age to Number and filter under-18 users.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

rawData.forEach((line, idx) => {
  try {
    const parsed = JSON.parse(line);
    if (!parsed.user || !('age' in parsed)) {
      throw new Error('MissingKeys');
    }
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error('InvalidAge');
    if (parsed.age >= 18) clean.push(parsed);
  } catch (err) {
    errors.push({ line: idx + 1, text: line, error: err.message });
  }
});

console.log('=== Q9 JSON Audit ===');
console.log('Clean data:', clean);
console.log('Errors:', errors);
