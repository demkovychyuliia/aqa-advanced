//Обчислення площі кола
let radius = 10;
let area = Math.PI * radius ** 2;

let roundedArea = Math.round(area * 100) / 100;

console.log("Circle area:", area);
console.log("Circle area: " + roundedArea);