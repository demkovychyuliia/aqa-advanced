//Округлення значень до 2 значень після крапки
let radius = 2.5;
let height = 4;

let volume = Math.PI * radius ** 2 * height;

let roundedVolume = Math.round(volume * 100) / 100;

console.log("Cylinder volume:", volume);
console.log("Cylinder volume: " + roundedVolume);
console.log(typeof roundedVolume);