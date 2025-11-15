// Q9 Odd–Even Number Analyzer
let output = [];

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push("FizzBuzz");
    else if (i % 2 === 0) output.push("Even");
    else output.push("Odd");
}

console.log(output);
