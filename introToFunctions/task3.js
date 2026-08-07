// Check whether an order can be accepted based on available stock
function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    }

    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    }

    return "Your order is accepted";
}

// Test the function with different order scenarios
console.log("Order status (10 available, 0 ordered):", checkOrder(10, 0));
console.log("Order status (10 available, 15 ordered):", checkOrder(10, 15));
console.log("Order status (10 available, 5 ordered):", checkOrder(10, 5));