/*The forEach loop in JavaScript is a method that executes a provided function once for each array element. It's a part of the Array prototype and provides a simple way to iterate over arrays without the need to use a traditional for loop. forEach is a higher-order function and is part of the functional programming paradigm in JavaScript. It's often used for its readability and simplicity.*/

const coding = ["js", "ruby", "java", "python", "cpp"];

/*The first loop uses the forEach method with a function expression. Here, function (val) is an anonymous function that takes each element of the array as val and logs it to the console.*/

coding.forEach(function (val) {
  //console.log(val); =>
  /*js
  ruby
  java
  python
  cpp*/
});

/*The second loop uses the forEach method with an arrow function. In this case, (item) => { console.log(item); } is an arrow function that does the same thing: takes each element of the array, now referred to as item, and logs it to the console. Both loops will produce the same output, which is each programming language in the coding array printed on a new line.*/

coding.forEach((item) => {
  //console.log(item);=>
  /*js
  ruby
  java
  python
  cpp*/
});

function printMe(item) {
  //yha hmne function ko foreach mein define na krte hue, alg se define kra hai, and then hmne use foreach mein pass kra hai, ye bhi same vhi kaam krega bs way different hai
  //console.log(item);=>
  /*js
  ruby
  java
  python
  cpp*/
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //console.log(item, index, arr); =>
  /*js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
  ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
  java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
  python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
  cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/
});

/* The code uses the `forEach` method with an arrow function. This function takes three parameters: `item`, `index`, and `arr`. Here's a breakdown of its functionality:

Arrow Function Parameters:
   - `item`: Represents the current element in the array during each iteration.
   - `index`: The index of the current element being processed in the array.
   - `arr`: The array that `forEach` is being applied to.

This usage of `forEach` is particularly useful for debugging or understanding the state of an array during iteration, as it provides comprehensive information about the array's elements, their position, and the array's overall structure during each step of the iteration.*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  //console.log(item.languageName); =>
  /*javascript
  java
  python*/
});

/*In your provided JavaScript code, you have an array `myCoding` that contains objects. Each object represents a programming language, with two properties: `languageName` and `languageFileName`.

You are using the `forEach` method to iterate over the `myCoding` array. For each object in the array, you are logging the value of the `languageName` property to the console. 

Here's what happens when this code is executed:

1. The `forEach` loop starts and takes each object (`item`) from the `myCoding` array in turn.
2. For each `item`, the `languageName` property is accessed (`item.languageName`) and its value is printed to the console.

This code effectively demonstrates how to iterate over an array of objects and access a specific property of each object.*/
