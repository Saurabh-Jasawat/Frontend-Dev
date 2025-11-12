const expenses = [2000, 1500, 8000, 1200, 800];
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

const average = total / expenses.length;
const taxRate = 0.10;
const taxAmount = total * taxRate;
const finalAmount = total + taxAmount;

console.log("=== Monthly Expense Tracker ===");
console.log("\nExpense Breakdown:");
for (let i = 0; i < categories.length; i++) {
    console.log(`${categories[i]}: $${expenses[i].toFixed(2)}`);
}

console.log(`\nTotal Expenses: $${total.toFixed(2)}`);
console.log(`Average Expense: $${average.toFixed(2)}`);
console.log(`Tax (10%): $${taxAmount.toFixed(2)}`);
console.log(`Final Amount (with tax): $${finalAmount.toFixed(2)}`);
