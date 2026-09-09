//Task 2: Fetch todo and user data using Promises

function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
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