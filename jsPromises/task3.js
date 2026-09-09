// Task 3: Fetch todo and user data using async/await

async function getTodo() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    return response.json();
}

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    return response.json();
}

const allResults = Promise.all([
    getTodo(),
    getUser()
]);

allResults
    .then(results => {
        console.log("Promise.all result:", results);
    })
    .catch(error => {
        console.error("Promise.all error:", error);
    });

const raceResult = Promise.race([
    getTodo(),
    getUser()
]);

raceResult
    .then(result => {
        console.log("Promise.race result:", result);
    })
    .catch(error => {
        console.error("Promise.race error:", error);
    });