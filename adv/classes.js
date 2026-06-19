// JS Classes

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  info() {
    return `${this.name} is a ${this.type}`;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  speak() {
    return `${this.name} says Woof!`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Cat");
  }

  speak() {
    return `${this.name} says Meow!`;
  }
}

const dog = new Dog("Bruno", "Labrador");
const cat = new Cat("Whiskers");

console.log(dog.speak());
console.log(cat.speak());
console.log(dog.info());
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true