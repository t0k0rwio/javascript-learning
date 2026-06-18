// JS Scope

// Global scope - accessible everywhere
let globalVar = "I am global";

function testScope() {
  // Local scope - only inside function
  let localVar = "I am local";
  console.log(globalVar);  // works
  console.log(localVar);   // works
}

testScope();
console.log(globalVar);    // works
// console.log(localVar);  // remove // and see error!

// Block scope
if (true) {
  let blockVar = "I am block scoped";
  var leakyVar = "I leak out!";
  console.log(blockVar);   // works inside
}
// console.log(blockVar);  // remove // and see error!
console.log(leakyVar);     // var leaks out of block!

// const and let are block scoped
// var is NOT block scoped (that's why we avoid it)
console.log("Scope done!");