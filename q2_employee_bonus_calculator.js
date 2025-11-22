'use strict';
// Q2 – Employee Bonus Calculator
// Convert string salaries and years to numbers, calculate bonus with validation and try/catch.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log('=== Q2 Employee Bonus Calculator ===');

employees.forEach(emp => {
  try {
    if (!emp.name || !('salary' in emp) || !('years' in emp)) {
      throw new Error('MissingProperty');
    }
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error('InvalidNumberConversion');

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.error(`Error processing ${emp && emp.name ? emp.name : JSON.stringify(emp)} ->`, err.message);
  }
});
