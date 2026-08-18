//Iterate over an array of users using for...of and object destructuring
const users = [
    {
        name: "Sarah",
        email: "sarah@example.com",
        age: 20
    },
    {
        name: "Pole",
        email: "pole@example.com",
        age: 30
    },
    {
        name: "Andian",
        email: "andrian@example.com",
        age: 40
    }
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}