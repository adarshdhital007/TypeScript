// Code 3: Reading and Displaying a List from a JSON File
// Explanation: This code reads a JSON file (Words.txt), parses its contents,
// and displays the list of words along with their index. It uses `async/await` for file reading and JSON parsing.

import { promises as fs } from "fs";

async function readAndDisplayList() {
  try {
    // Read the contents of Words.txt
    const fileContents = await fs.readFile("./Assets/Words.txt", "utf-8");
    const jsonData = JSON.parse(fileContents);
    const words: string[] = jsonData.words;

    console.log("List of words:");
    words.forEach((word, index) => {
      // Display each word with its index
      console.log(`${index + 1}. ${word}`);
    });
  } catch (error) {
    // Handle any errors that occur during file reading or JSON parsing
    console.log(`An error occurred: ${error}`);
  }
}

readAndDisplayList();
