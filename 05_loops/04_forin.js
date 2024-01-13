/*A `for...in` loop in JavaScript is used to iterate over the properties of an object. It is important to note that the loop will go through all enumerable properties of the object, including those inherited through the prototype chain. Here's a basic structure of how a `for...in` loop looks:*/

const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  //console.log(key); =>
  /*a
  b
  c*/
  console.log(key + ": " + object[key]); //=>
  /*a: 1
  b: 2
  c: 3*/
}

/*In this example:
1. `object` is the object we are iterating over.
2. `key` is a variable that represents the current property name in each iteration.
3. Inside the loop, you can use `object[key]` to access the value of the property.
*/

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //console.log(key); =>
  /*js
  cpp
  rb
  swift*/
  console.log(`The extension for ${key} is ${myObject[key]}`); //=>
  /*The extension for js is javascript
  The extension for cpp is C++
  The extension for rb is ruby
  The extension for swift is swift by apple*/
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //console.log(key); => will log the index of each element
  /*0
  1
  2
  3
  4*/
  console.log(programming[key]); //=> will log the value at that index in the programming array
  /*js
  rb
  py
  java
  cpp*/
}

/*Hmne dekha ki for...of loop ki help se hm array ki values lo directly log kra pa rahe the but for...in loop mein hmein array ko log krane k liye array ki value ko index se access krna pdega.*/

/*The for...in loop can technically be used for arrays, it's not the recommended approach because it iterates over all enumerable properties of the array object, not just the numerical indexes. For arrays, a for...of loop or a traditional for loop is typically preferred.*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
/*This approach won't work as intended because for...in is designed for iterating over the properties of an object, not for iterating over a Map.
A Map in JavaScript is a collection of key-value pairs, and it has its own set of methods for iteration. To iterate over the keys, values, or entries (key-value pairs) of a Map, you should use the Map.prototype.forEach method or a for...of loop along with the Map's iterator methods (keys(), values(), and entries()).*/
