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

function one() {
  const username = "yogita";

  function two() {
    const website = "youtube";
    //console.log(username); => yogita, function two is the child of function one so it can access any variable of its parent, i.e.,function one
  }
  //console.log(website); => website is not defined, because website's scope is under function two only , so we can't access it outside that

  two(); // => jb two ko call kra to function two execute hua, usmein hmne username console kraya hai
}
one();

//jsa function mein ho raha tha vsa hi if mein bhi hoga
if (true) {
  const username = "yogita";
  if (username === "yogita") {
    const website = " youtube";
    //console.log(username + website); => yogita youtube
  }
  //console.log(website); => website is not defined, again, because website's scope is under  the inside vala if block only , so we can't access it outside that
}

//console.log(username); => username is not defined, it's also bcoz username is defined under if block and we can't access it outside that

// ++++++++++++++++++ interesting ++++++++++++++++++

//addOne(5); => no error
//console.log(addOne(5)); => 6, so we can see that when we'll declare the function with this type, when we don't hold it in a variable, then we can call or console the function before or after its declaration and it'll gave no error

function addOne(num) {
  //ye or neeche jo function bnaya hai dono same hi baat hai, bs neeche hmne function ko variable mein hold kr liya hai or yha nahi, ise function hi bolenge, but neeche vale ko expression bhi bol skte hai
  return num + 1;
}
//addOne(5);
//console.log(addOne(5)); => 6

//addTwo(5); => Cannot access 'addTwo' before initialization, here we are getting this error, because we are holding the function in a variable
//console.log(addTwo(5)); => Cannot access 'addTwo' before initialization, here we are getting this error, because we are holding the function in a variable

const addTwo = function (num) {
  return num + 2;
};
//addTwo(5);
//console.log(addTwo(5)); => 7
