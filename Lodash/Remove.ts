import _ from "lodash";

var initialArr = [
  { id: 1, name: "Adarsh", isActive: "true" },
  { id: 2, name: "Prakash", isActive: "false" },
  { id: 3, name: "Aayush", isActive: "false" },
  { id: 4, name: "Kushal", isActive: "false" },
];

var activeUsers = _.filter(initialArr, function (user) {
  return user.isActive === "true";
});

// var removedUsers = _.filter(initialArr,function(user){
//     return user.id !== 2;
// })

// var rejectedUser = _.reject(initialArr,function(user){
//     return user.id === 2;
// })

console.log(activeUsers);
