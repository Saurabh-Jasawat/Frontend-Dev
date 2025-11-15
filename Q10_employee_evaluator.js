// Q10 Departmental Employee Evaluator
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

departments.forEach(([dept, score]) => {
    if (score >= 90) console.log(dept, "- Excellent");
    else if (score >= 75) console.log(dept, "- Good");
    else if (score >= 60) console.log(dept, "- Average");
    else console.log(dept, "- Needs Improvement");
});
