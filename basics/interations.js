// JS Iterations

// forEach - loop over array
console.log("=== forEach ===");
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
  console.log(index + 1, fruit);
});

// for...of - loop over any iterable
console.log("=== for...of ===");
for (let fruit of fruits) {
  console.log(fruit);
}

// for...of with string
console.log("=== string loop ===");
for (let char of "Hello") {
  console.log(char);
}

// for...of with Map
console.log("=== map loop ===");
let myMap = new Map([["name", "Ram"], ["age", 25]]);
for (let [key, value] of myMap) {
  console.log(key, ":", value);
}

// for...of with Set
console.log("=== set loop ===");
let mySet = new Set([1, 2, 3, 4]);
for (let val of mySet) {
  console.log(val);
}

// entries() - get index and value together
console.log("=== entries ===");
for (let [index, fruit] of fruits.entries()) {
  console.log(index, "->", fruit);
}