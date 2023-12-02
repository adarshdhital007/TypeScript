//Vector addition
interface vector2D{x:number,y:number}

const vector1:vector2D[]=[{x:1,y:2},{x:3,y:4},{x:5,y:6}];
const vector2:vector2D[]=[{x:7,y:8},{x:9,y:10},{x:11,y:12}];

const result=addervect(vector1[1],vector2[1]);

function addervect(x:vector2D,y:vector2D){
    const a=x;
    const b=y;
   return {x:a.x+b.x,y:a.y+b.y}
}

console.log(result);

//2d limit- 4e8
