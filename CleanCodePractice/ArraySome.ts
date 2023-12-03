// User Array.some for checking if any element satisfies a condition
const hasNegativeNumber =(numbers:number[]):boolean=>{
    return numbers.some((num) => num<0);
};

console.log(hasNegativeNumber([10,9,-8])); // Output is true
console.log(hasNegativeNumber([10,9])); // Output is false
