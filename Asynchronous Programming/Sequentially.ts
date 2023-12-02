//Sequential File Reading with `async/await`
//This code uses `async/await` to read and log the contents of three text files sequentially.
// It waits for each file to be read before moving on to the next one.

import { promises as fs } from "fs";

async function readFilesSequentially() {
  try {
    // Read the contents of test1.txt
    const file1Contents = await fs.readFile("./Assets/Words.txt", "utf-8");
    console.log(`test1.txt read: ${file1Contents}`);

    // Read the contents of test2.txt
    const file2Contents = await fs.readFile("./test2.txt", "utf-8");
    console.log(`test2.txt read: ${file2Contents}`);

    // Read the contents of test3.txt
    const file3Contents = await fs.readFile("./test3.txt", "utf-8");
    console.log(`test3.txt read: ${file3Contents}`);
  } catch (error) {
    // Handle any errors that occur during file reading
    console.log(`An error occurred: ${error}`);
  }
}

readFilesSequentially();