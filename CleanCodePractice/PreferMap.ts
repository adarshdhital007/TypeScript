// Prefer map over plain objects over key value pairs.

const userMap=new Map<number, string>();
userMap.set(1,"Adarsh");
userMap.set(2,"Dhital");

console.log(userMap.get(2)); //Output is Dhital