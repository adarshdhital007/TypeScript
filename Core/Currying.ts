function curry(f: any) {
  // curry(f) does the currying transform
  return function (a: number) {
    return function (b: number) {
      return f(a, b);
    };
  };
}

// usage
function transform(a: number, b: number) {
  return a + b;
}

let curriedSum = curry(transform);
let curriedAnswer = curriedSum(4)(3);
console.log(curriedAnswer);
