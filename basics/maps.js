// JS Maps
// Map = key-value pairs (like objects but more powerful!)

const myMap = new Map();

// Adding values
myMap.set("name", "Ram");
myMap.set("age", 25);
myMap.set("city", "Chennai");
myMap.set(1, "number as key!");     // any type as key
myMap.set(true, "boolean as key!"); // even boolean!

console.log("Map:", myMap);

// Getting values
console.log("name:", myMap.get("name"));
console.log("age:", myMap.get("age"));

// Checking
console.log("has city:", myMap.has("city"));
console.log("has job:", myMap.has("job"));
console.log("size:", myMap.size);

// Deleting
myMap.delete("city");
console.log("After delete size:", myMap.size);

// Looping
console.log("=== loop ===");
myMap.forEach((value, key) => {
  console.log(key, "->", value);
});

// Map vs Object
// Map - any type as key, maintains order, has .size
// Object - only string keys, no .size property
console.log("Maps done!");