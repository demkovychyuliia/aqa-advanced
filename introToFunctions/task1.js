//Function Declaration
function calculateArea(width, height) {
    return width * height;
}

console.log("Rectangle area (Function Declaration):", calculateArea(5, 10));

//Function Expression
const calculateAreaExpression = function (width, height) {
    return width * height;
};

console.log("Rectangle area (Function Expression):", calculateAreaExpression(5, 10));

//Arrow Function
const calculateAreaArrow = (width, height) => {
    return width * height;
};

console.log("Rectangle area (Arrow Function):", calculateAreaArrow(5, 10));

