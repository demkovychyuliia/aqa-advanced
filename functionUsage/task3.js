
//Divide two numbers and validate input

function divide(numerator, denominator){
    if (typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Both arguments must be numbers.");
    }
    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numerator / denominator;
}

try {
    console.log("Division result:", divide(10, 5));
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Work is finished.");
}

try {
    console.log("Division result:", divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Work is finished.");
}

try {
    console.log("Division result:", divide(10, "5"));
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Work is finished.");
}
