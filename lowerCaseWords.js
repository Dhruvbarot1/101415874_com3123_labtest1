
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        
        // Check if the input is an array, reject with error if not
        if (!Array.isArray(mixedArray)) {
            reject(new Error("The provided input is not an array. Please pass an array."));
            return;  // Exit early to prevent further execution
        }

        // Filter out non-string values and convert strings to lowercase
        const stringOnlyArray = mixedArray.filter(item => typeof item === 'string');
        const lowercasedStrings = stringOnlyArray.map(item => item.toLowerCase());

        // Resolve the promise with the lowercased strings array
        resolve(lowercasedStrings);
    });
}

// Example usage of the function
lowerCaseWords(["Hello", 123, "WORLD", true, "JavaScript"])
    .then(result => console.log(result))  // Expected output: ["hello", "world", "javascript"]
    .catch(error => console.error(error.message));  // Handle any errors
