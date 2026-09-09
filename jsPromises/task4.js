// Task 4: Implement todo and user requests using classes

class TodoService {
    async getTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        return response.json();
    }
}

class UserService {
    async getUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        return response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

const todoPromise = todoService.getTodo();
const userPromise = userService.getUser();

const allResults = Promise.all([
    todoPromise,
    userPromise
]);

allResults
    .then(results => {
        console.log("Promise.all result:", results);
    })
    .catch(error => {
        console.error("Promise.all error:", error);
    });

const raceResult = Promise.race([
    todoPromise,
    userPromise
]);

raceResult
    .then(result => {
        console.log("Promise.race result:", result);
    })
    .catch(error => {
        console.error("Promise.race error:", error);
    });


    