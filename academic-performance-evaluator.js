const marks = [85, 78, 92, 65, 88];
const subjects = ["Math", "Science", "English", "History", "Computer"];

let totalMarks = 0;
let isDetained = false;

console.log("=== Academic Performance Evaluator ===");
console.log("\nSubject-wise Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(`${subjects[i]}: ${marks[i]}`);
    totalMarks += marks[i];
    
    if (marks[i] < 35) {
        isDetained = true;
    }
}

const average = totalMarks / marks.length;
const percentage = average;

console.log(`\nTotal Marks: ${totalMarks}/500`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

let result;
if (isDetained) {
    result = "Detained (Subject marks below 35)";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`\nResult: ${result}`);
