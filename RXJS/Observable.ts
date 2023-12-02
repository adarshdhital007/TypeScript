import { map, Observable } from "rxjs";


//Create an observable with an intial array
const array = new Observable<number[]>((observer) => {
    observer.next([1, 2, 3]);
  });
  

//Subscribing to the observable
array.subscribe((arr)=>{
    console.log(`Current array is : `,arr);
})

//Adding an element to the end of the array and emitting a new observable
array.pipe(map((arr)=>[...arr,4])).subscribe((newArray)=>{
    console.log('Updated array (add) : ',newArray);
})

//Inserting at a specific position and emitting a new value
array.pipe(map((arr)=>[...arr.slice(0,1),5,...arr.slice(1)])).subscribe((newArray)=>{
    console.log('Updated array (insert ) : ',newArray);
})