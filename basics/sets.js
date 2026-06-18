// JS Sets
// Set = collection of UNIQUE values, no duplicates!

const mySet = new Set([1, 2, 3, 2, 1, 4]);
console.log("Set:", mySet);  // duplicates removed!

// Adding & Removing
mySet.add(5);
mySet.add(2);  // already exists, ignored!
mySet.delete(3);
console.log("After add/delete:", mySet);

// Checking
console.log("has 2:", mySet.has(2));
console.log("has 10:", mySet.has(10));
console.log("size:", mySet.size);

// Looping
console.log("=== loop ===");
for (let val of mySet) {
  console.log(val);
}

// Convert to array
let arr = [...mySet];
console.log("To array:", arr);

// Most common use - remove duplicates from array!
let withDups = [1, 2, 2, 3, 3, 3, 4, 4];
let unique = [...new Set(withDups)];
console.log("Duplicates removed:", unique);