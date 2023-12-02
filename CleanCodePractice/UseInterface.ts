//  Use interfaces for complex object shapes
interface User{
    id:number;
    name:string;
}

const getUser = (id:number):User=>{
    return {id,name:"Adarsh Dhital"};
};

const user : User = getUser(1);
console.log(user);