class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  whichBreed() {
    console.log("I am a " + this.breed);
  }
}

const myDog = new Dog("Coco", 1, "Pomerian");
myDog.whichBreed();
