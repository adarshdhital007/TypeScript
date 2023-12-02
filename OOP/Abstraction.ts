abstract class Structure{
    abstract calculatePerimeter():number;
}

class Rectangle extends Structure{
    constructor(public length:number,public breadth:number){
        super();
    }

    calculatePerimeter(){
        return   2 * (this.length + this.breadth);
    }
}

function getPerimeter(Structure:Structure):void{
    console.log('Perimeter : ' + `${Structure.calculatePerimeter()}`);
}

const rectangle=new Rectangle(5,6);
console.log('Length : ' + `${rectangle.length}` + "\nBreadth : " + `${rectangle.breadth}` );
getPerimeter(rectangle);