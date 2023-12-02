// Use default parameter values instead of conditional checks
const chatWithUser=(user:string,message:string="Hello, what's up ? "):string => {
    return `${message}${user} `;
}

const chatMessage:string=chatWithUser("Adarsh");
console.log(chatMessage);