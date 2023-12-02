// Prefer destructuring for object and array assignments
const getUserDetails = (user:{id:number;name:string}):void =>{
    const {id,name} = user;
    console.log(`User ID : ${id}, Name : ${name}`);
};

getUserDetails({id:7,name:"Adarsh"});