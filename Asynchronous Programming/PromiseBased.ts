// Promise-Based File Reading
//This code uses Promises to read and log the contents of three text files sequentially.
// It uses `.then()` to handle each file's contents one by one and `.catch()` to handle errors.

import { promises as fs } from "fs";

fs.readFile("./Assets/Words.txt")
  .then((value: Buffer) => {
    // Handle the contents of test1.txt
    console.log(`ps test1.txt read: ${value.toString()}`);
    return fs.readFile("./test2.txt");
  })
  .then((value: Buffer) => {
    // Handle the contents of test2.txt
    console.log(`ps test2.txt read: ${value.toString()}`);
    return fs.readFile("./test3.txt");
  })
  .then((value: Buffer) => {
    // Handle the contents of test3.txt
    console.log(`ps test3.txt read: ${value.toString()}`);
  })
  .catch((error: Error) => {
    // Handle any errors that occur during the promise chain execution
    console.log(`An error occurred: ${error}`);
  });

