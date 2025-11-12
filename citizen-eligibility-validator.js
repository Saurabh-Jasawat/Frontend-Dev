const age = 22;
const isCitizen = true;

console.log("=== Citizen Eligibility Validator ===");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log("");

let eligibilityStatus;

if (isCitizen && age >= 18) {
    if (age >= 21) {
        eligibilityStatus = "Eligible for all services.";
    } else {
        eligibilityStatus = "Eligible to vote only.";
    }
} else if (!isCitizen && age >= 18) {
    eligibilityStatus = "Only age criteria met.";
} else {
    eligibilityStatus = "Not eligible yet.";
}

console.log(`Eligibility: ${eligibilityStatus}`);
