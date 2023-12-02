interface Shape{
    calculateArea():number;
}

class Circle implements Shape{
    constructor(public radius:number){};

    calculateArea(){
        return Math.PI * Math.pow(this.radius,2);
    }
}

class Square implements Shape{
    constructor(public side:number){};

    calculateArea(){
    return Math.pow(this.side,2);
    }
}

function printArea(shape:Shape):void{
    console.log('Area : ' + `${shape.calculateArea()}`);
}

const circle=new Circle(5);
const square=new Square(10);

console.log("Given circle radius : " + `${circle.radius}`);
printArea(circle);

console.log("\nGiven square side : " + `${square.side}`);
printArea(square);