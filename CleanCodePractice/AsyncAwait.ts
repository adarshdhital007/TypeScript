// Use async/await for asynchronous operations
const fetchData = async():Promise<string>   => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data.message;
}

fetchData().then((result)=>{
    console.log(result);
})