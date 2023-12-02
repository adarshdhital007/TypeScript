// Use template literals for string concatenation
const formatMessage = (user:string,action:string):string =>{
 return `${user} has completed ${action}`;
}

const message : string = formatMessage("Adarsh","his exam");
console.log(message);