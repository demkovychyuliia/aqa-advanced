// Handle a number by calling the appropriate callback function based if the passed number is even or odd

function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}

handleNum(4, handleEven, handleOdd);

