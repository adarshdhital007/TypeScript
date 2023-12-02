// Use Object.values for iterating over object values
const printObjValues = (obj:Record<string,any>):void => {
    Object.values(obj).forEach((value)=>{
        console.log(value);
    });
};

printObjValues({name:"Adarsh",age:22});