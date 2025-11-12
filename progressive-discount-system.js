const purchaseAmount = 7500;

console.log("=== Progressive Discount System ===");
console.log(`Original Total: $${purchaseAmount}`);

let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = (purchaseAmount * discountPercentage) / 100;
const finalPrice = purchaseAmount - discountAmount;

console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: $${Math.round(discountAmount)}`);
console.log(`Final Price: $${Math.round(finalPrice)}`);
