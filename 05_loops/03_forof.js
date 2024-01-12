// for of

// ["", "", ""]
// [{}, {}, {}]

/*In JavaScript, the `for...of` loop is a modern loop introduced in ES6, used to iterate over iterable objects such as arrays, strings, maps, node lists, and more. It simplifies the syntax for iterating over collections compared to traditional `for` loops.The basic syntax of a `for...of` loop is:

for (const iterator of object) {
    // code block to be executed    
}

Here's how it works:
1. `iterator`: On each iteration, a value of a different property is assigned to this variable.
2. `object`: This is the object whose enumerable properties are iterated over.

For example, to iterate over an array using a `for...of` loop:*/

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  /*console.log(fruit); => 
  apple
  banana
  cherry*/
}

/*In this example, the loop iterates over each element of the `fruits` array. On each iteration, the current element of the array is assigned to the `fruit` variable, and then the `console.log(fruit)` statement is executed.

The `for...of` loop is also useful for iterating over strings:*/

const greeting = "Hello";

for (const char of greeting) {
  /*console.log(char); =>
  H
  e
  l
  l
  o*/
}

/*In this case, each character of the string "Hello" is logged to the console on a new line.

It's a more concise and readable alternative to the traditional `for` loop, especially when dealing with iterable objects.*/

// Maps
/*Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. Map maintains the insertion order of the elements, which means it iterates its elements in their insertion order.
Here are some important characteristics and methods of a Map:

Creating a Map:*/

const map = new Map();

/*Setting Key-Value Pairs:
You can use any values (objects and primitive types) as keys or values.

map.set('1', 'str1');    // a string key
map.set(1, 'num1');      // a numeric key
map.set(true, 'bool1');  // a boolean key
*/

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); //we tried to again set the same key in the map, but it don't take the same key again.

//console.log(map); => This line outputs the entire Map object to the console. In a JavaScript environment (like a browser console or Node.js), this would typically show the Map object with its keys and values.
/*Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }*/

for (const iterator of map) {
  //Since we are iterating over map directly, each iterator is actually an array containing two elements: the key and the value of the current map entry. The entries are returned in their insertion order.
  //console.log(iterator); =>
  /*[ 'IN', 'India' ]
  [ 'USA', 'United States of America' ]
  [ 'Fr', 'France' ]*/
}

for (const [keys, values] of map) {
  //We can destructure the iterator within the loop to separate keys and values:
  //console.log(keys, ":-", values); =>
  /*IN :- India
  USA :- United States of America
  Fr :- France*/
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  //this approach will result in an error because for...of is designed to iterate over iterable objects, like arrays or maps, and plain objects are not iterable in this way.
  //console.log(key, ":-", value); => myObject is not iterable
}
