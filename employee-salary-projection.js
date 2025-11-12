const currentSalary = 50000;
const annualIncrementRate = 10;

console.log("=== Employee Salary Projection (5 Years) ===");
console.log(`Starting Salary: $${currentSalary}`);
console.log(`Annual Increment: ${annualIncrementRate}%`);
console.log("");

const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    const salary = currentSalary * Math.pow(1 + annualIncrementRate / 100, year);
    const roundedSalary = Math.round(salary);
    
    salaryProjection.push({
        Year: year,
        Salary: `$${roundedSalary}`
    });
}

console.table(salaryProjection);
