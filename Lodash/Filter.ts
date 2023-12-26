import _ from "lodash";

var users = {
  1: {
    id: 1,
    name: "Adarsh",
    status: "active",
  },
  2: {
    id: 2,
    name: "Prakash",
    status: "offline",
  },
};

var newArr = _.filter(users, function (item) {
  return item.name === "Adarsh";
});

console.log(newArr);
