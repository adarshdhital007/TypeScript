// Prefer for...of over forEach for better control
const printElementsIndex = (arr: number[]): void => {
  for (const [index, element] of arr.entries()) {
    console.log(`Index ${index}: ${element}`);
  }
};

printElementsIndex([7,8,9]);
