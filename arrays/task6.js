// Copy and sort an array in ascending order

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedNumbers = [...numbersList];

sortedNumbers.sort((a, b) => {
    return a - b;
});

console.log("Original array:", numbersList);
console.log("Sorted array:", sortedNumbers);