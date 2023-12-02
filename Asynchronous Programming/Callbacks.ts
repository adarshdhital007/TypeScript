function performAsyncOperation(callback: (result: string) => void) {
  // Simulate an asynchronous operation (e.g., an API request)
  setTimeout(() => {
    const result = "Operation completed!";
    callback(result);
  }, 2000); // Simulating a 2-second delay
}

function handleCallback(result: string): void {
  console.log(`Handling the result: ${result}`);
}

console.log("Start of the program");

// Call the function with a callback
performAsyncOperation(handleCallback);

console.log("End of the program");
