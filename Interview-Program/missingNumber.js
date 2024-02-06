function findMissingNumber(arr) {
    // Calculate the sum of the series from 1 to n using the formula: n * (n + 1) / 2
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The difference between the expected sum and actual sum is the missing number
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Example usage:
const numbers = [1, 2, 3, 5, 6, 7, 8];
const missingNumber = findMissingNumber(numbers);
console.log("Missing Number:", missingNumber);