// Use meaningful variable and function names
const calculateArea = (radius: number): number => {
    const PI=3.14;
    return PI * radius * radius;
};

const area:number = calculateArea(5);
console.log(area);
