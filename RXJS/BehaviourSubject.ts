import { BehaviorSubject } from "rxjs";

const counter = new BehaviorSubject(0);

counter.subscribe((value) => {
  console.log(`Current value is : ${value}`);
});
counter.next(1);
counter.next(2);
counter.next(3);

counter.subscribe((value) => {
  console.log(`New Value is : ${value}`);
});
