import _ from "lodash";

const users = [
  {
    id: "1",
    name: "John",
    isActive: true,
  },
  {
    id: "2",
    name: "Ripper",
    isActive: false,
  },
];


 var check = _.every(users,function(user){
    return user.isActive ;
})


console.log(check);