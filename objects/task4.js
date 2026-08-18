//Add and delete properties from an object
const person = {
    firstName: "Sarah",
    lastName: "Parker",
    age: 25
};

person.email = "sarah.parker@gmail.com";

delete person.age;

console.log(person);

