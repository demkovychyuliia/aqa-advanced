// Filter even numbers from an array using the filter() method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);