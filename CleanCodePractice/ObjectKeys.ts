//Use object.keys or iterating over object keys
type Me = {
  name: string;
  age: number;
};
const printObject = (obj: Me): void => {
  Object.keys(obj).forEach((key) => {
    console.log(key, obj[key as keyof Me]);
  });
};

printObject({ name: "Adarsh", age: 22 });
