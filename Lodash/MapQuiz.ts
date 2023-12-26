import _ from "lodash";

interface User {
  id: number;
  first_name: string;
  status: string;
}

var users: User[] = [
  {
    id: 1,
    first_name: "Adarsh",
    status: "active",
  },
  {
    id: 2,
    first_name: "Prakash",
    status: "offline",
  },
];

function normalizeUsers(users: User[]) {
  return _.map(users, function (user) {
    return {
      id: user.id,
      firstName: user.first_name,
      isActive: user.status === "active",
    };
  });
}

console.log(normalizeUsers(users));
