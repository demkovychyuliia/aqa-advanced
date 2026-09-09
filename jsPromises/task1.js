// Task 1: Prints the text to the console after the specified delay

function printText(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printText("Hello", 4000);