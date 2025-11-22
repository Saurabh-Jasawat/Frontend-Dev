'use strict';
// Q1 – Dynamic Data Parser
// Convert mixed API data into Number, Boolean, String forms.
// Skip invalid numbers and log them separately; build arrays for valid and invalid numeric data.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const report = [];

apiData.forEach((val, idx) => {
  const original = val;
  // String form
  const asString = String(val);
  // Boolean form
  const asBoolean = Boolean(val && String(val).trim().length > 0 && String(val).toLowerCase() !== 'false');
  // Number form attempt
  const asNumber = Number(val);
  const isValidNumber = typeof asNumber === 'number' && !Number.isNaN(asNumber);

  if (isValidNumber) validNumbers.push(asNumber);
  else invalidNumbers.push({index: idx, value: original});

  report.push({
    index: idx,
    original,
    asString,
    asBoolean,
    asNumber: isValidNumber ? asNumber : null,
    isValidNumber
  });
});

console.log('=== Q1 Dynamic Data Parser Report ===');
report.forEach(r => {
  console.log(`Index ${r.index}: original=${JSON.stringify(r.original)} | string="${r.asString}" | boolean=${r.asBoolean} | number=${r.isValidNumber ? r.asNumber : 'INVALID'}`);
});
console.log('Valid numeric array:', validNumbers);
console.log('Invalid numeric entries:', invalidNumbers);
