const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

console.log("=== Random Math Quiz Generator ===");
console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);

let correctAnswer;

switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;
    default:
        correctAnswer = "Invalid operator";
}

console.log(`Correct Answer: ${correctAnswer}`);
