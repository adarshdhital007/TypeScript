// Use Promise.all for parallel asynchronous operations
const fetchDataFromMultipleSources = async (): Promise<string[]> => {
  const [result1, result2] = await Promise.all([
    fetch("https://api.example.com/data1").then((res) => res.json()),
    fetch("https://api.example.com/data2").then((res) => res.json()),
  ]);
  return [result1.data, result2.data];
};

fetchDataFromMultipleSources().then((res) => console.log(res));
