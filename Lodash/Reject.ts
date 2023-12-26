import _ from "lodash";

interface User {
  id: number;
  name: string;
  isActive: boolean;
  likes: number;
}

var users: User[] = [
  {
    id: 1,
    name: "Adarsh",
    isActive: true,
    likes: 30,
  },
  {
    id: 2,
    name: "Kushal",
    isActive: true,
    likes: 20,
  },
  {
    id: 3,
    name: "Prakash",
    isActive: false,
    likes: 10,
  },
];

function popularUsers(users: User[]) {
  return _.filter(users, function (user) {
    return user.isActive && user.likes > 20;
  });
}

console.log(popularUsers(users));
