import _ from "lodash";

//Standard forEach method
var native = [1, 2].forEach((item) => {
  console.log(item);
});

//Using lodash _.forEach
var lodash = _.forEach([3, 4], function (item) {
  console.log(item);
});

console.log(native, lodash);

var items = {
  1: {
    name: "Milk",
  },
  2: {
    name: "Coffee",
  },
};

var arr: any[] = [];

_.each(items, function (item, index) {
  console.log(item, index);
  arr.push(item);
});

console.log(arr);

//lodash allows us to chain method
