// Count down from the given number using recursion until it reaches zero

function countdown(num) {
    if (num <= 0) {
        return;
    }

    console.log(num);
    countdown(num - 1);
}

countdown(5);

