import { filter, map, from } from 'rxjs'

const number = from([1, 2, 3, 4, 5]);

number.pipe(filter((num) => num % 2 === 0), map((num) => num * 2),).subscribe((result) => {
  console.log(result);
})