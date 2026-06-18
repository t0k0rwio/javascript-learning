// JS Objects

// Creating an object
const person = {
  name: "Ram",
  age: 25,
  city: "Chennai",
  hobbies: ["coding", "cricket"],
  greet: function() {
    return "Hi, I am " + this.name;
  }
};

// Accessing
console.log(person.name);
console.log(person["age"]);
console.log(person.hobbies[0]);
console.log(person.greet());

// Modifying
person.age = 26;
person.email = "ram@gmail.com";
console.log("Updated age:", person.age);
console.log("New email:", person.email);

// Looping over object
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Destructuring
const { name, age, city } = person;
console.log("Destructured:", name, age, city);

// Spread operator
const extra = { ...person, job: "Developer" };
console.log("Job:", extra.job);

// Object methods
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));