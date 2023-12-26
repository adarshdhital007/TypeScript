import _ from "lodash";

var users = [
  { id: 1, name: "Adarsh" },
  { id: 2, name: "Prakash" },
  { id: 3, name: "Kushal" },
];

var find = _.find(users, { id: 1 });

console.log(find);
