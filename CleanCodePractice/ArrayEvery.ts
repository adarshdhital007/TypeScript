// Use Array.every for checking if all elements satisfy the condition
const areAllPositive = (numbers: number[]): boolean => {
  return numbers.every((num) => num > 0);
};

console.log(areAllPositive([7])); // Output is true
console.log(areAllPositive([-10])); // Output is false