//Create car objects and combine their properties using the spread operator
const car1 = {
    brand: "Audi",
    model: "Q7",
    year: 2022
};

const car2 = {
    brand: "Seat",
    model: "Ibiza",
    owner: "Sarah"
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);