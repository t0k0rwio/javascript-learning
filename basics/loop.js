// JS Loops

// for loop
console.log("=== for loop ===");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// while loop
console.log("=== while loop ===");
let n = 1;
while (n <= 5) {
  console.log("While:", n);
  n++;
}

// for...of (loop over array)
console.log("=== for...of ===");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in (loop over object)
console.log("=== for...in ===");
let person = { name: "Ram", age: 25, city: "Chennai" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// break and continue
console.log("=== break & continue ===");
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue;  // skip 4
  if (i === 7) break;     // stop at 7
  console.log("i =", i);
}