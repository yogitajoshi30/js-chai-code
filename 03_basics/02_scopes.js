// Global Scope: A variable or function is in the global scope if it is defined outside of any function or block. This means it can be accessed and modified from any part of the code, including within functions or blocks.
// Local Scope: Local scope refers to variables or functions that are accessible only within the function or block where they are defined. There are two types of local scopes: function scope and block scope.
//Function Scope: Created by functions in JavaScript. Variables declared with var inside a function are local to that function.
//Block Scope: Introduced in ES6 with let and const. Variables declared with let or const inside a block {...} (like for, if, or a simple block) are only accessible within that block.

//let a = 10;
let a = 100;
//const b = 20;
var c = 300;

//console.log(a); => 10
//console.log(b); => 20
//console.log(c); => 30

if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
  //console.log("Inner: ", a); => Inner:  10
}

//console.log(a); => a is not defined, the variable a is declared with let, which means it has block scope. It will only exist within the curly braces {} of the if block. Trying to access it outside the block will result in a ReferenceError.
//console.log(b); => b is not defined, the variable b is declared with const, which also means it has block scope, similar to let.
//console.log(c); => 30, the variable c is declared with var, which has function scope or global scope if not declared inside a function. This means c is accessible outside the if block.

//console.log(a); => 100
//console.log(c); => 30, ye output isliye aaya because hmne global vale mein to 300 likha but if block k andar var c; fir se likhne pe vo update ho gya, var k saath yhi problem hai ki vo scope ko follow nahi krta

/*function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};*/
