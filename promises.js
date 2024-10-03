
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success: The promise was resolved after 500ms.");
        }, 500);  // Timeout after 500 milliseconds
    });
}

// Function to simulate a failed asynchronous operation
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Error: The promise was rejected after 500ms."));
        }, 500);  // Timeout after 500 milliseconds
    });
}

// Example usage of resolvedPromise (success case)
resolvedPromise()
    .then(result => console.log(result))  // Expected output: "Success: The promise was resolved after 500ms."
    .catch(error => console.error(error.message));  // Handles any error, though it won’t occur here

// Example usage of rejectedPromise (error case)
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));  // Expected output: "Error: The promise was rejected after 500ms."
