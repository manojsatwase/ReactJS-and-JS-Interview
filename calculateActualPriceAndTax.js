// Write a JavaScript program where I pass the price, including taxes (MRP),
// and also pass the tax percentage. In return, I want the actual price and the tax amount. 
// better and optimiza version

function calculateActualPriceAndTax(mrp, taxPercentage) {
    // Validate inputs
    if (isNaN(mrp) || isNaN(taxPercentage)) {
        return "Invalid input. Please provide valid numbers.";
    }

    // Calculate actual price and tax amount
    const taxAmount = (mrp * taxPercentage) / 100;
    const actualPrice = mrp - taxAmount;

    // Return results directly
    return {
        actualPrice: actualPrice.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
    };
}

// Example usage
const mrp = 120; // Replace with your MRP value
const taxPercentage = 10; // Replace with your tax percentage

// Destructure the result object
const { actualPrice, taxAmount } = calculateActualPriceAndTax(mrp, taxPercentage);

console.log(`MRP: $${mrp.toFixed(2)}`);
console.log(`Actual Price: $${actualPrice}`);
console.log(`Tax Amount: $${taxAmount}`);
