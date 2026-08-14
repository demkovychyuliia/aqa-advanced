// Create a new array using the map() method

const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map((number, index) => {
    return number * index;
});

console.log("New array:", multipliedNumbers);