import _ from 'lodash';

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Alice', age: 30 },
  { id: 3, name: 'Bob', age: 22 },
  { id: 4, name: 'Julia', age: 17 },
  { id: 5, name: 'Jason', age: 13 },
];

interface UserWithStatus {
  id: number;
  name: string;
  status: string;
}

const usersWithStatus: UserWithStatus[] = _.map(users, (user) => ({
  id: user.id,
  name: user.name,
  status: user.age >= 18 ? 'Adult' : 'Minor',
}));

const adultsOnly: UserWithStatus[] = usersWithStatus.filter((user) => user.status === 'Adult');

console.log(adultsOnly);
