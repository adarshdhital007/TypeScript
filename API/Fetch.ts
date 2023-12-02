import { promises as fs } from "fs";

interface Data {
  first_name: string;
  last_name: string;
  email: string;
  birthdate: string;
}

async function jsondemo() {
  try {
    const words = await fs.readFile("./assets/User.json",'utf8');
    const parsedwords: Data[] = JSON.parse(words);

    for (const person of parsedwords) {
        console.log(person.first_name);
        console.log(person.last_name);
        console.log(person.email);
        console.log(person.birthdate);
    }
  } catch (error) {
    console.log("Status error");
  }
}

jsondemo();
