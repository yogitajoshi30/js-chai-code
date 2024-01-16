const coding = ["js", "ruby", "java", "python", "cpp"];

/*When we store the result of a forEach loop in a variable in JavaScript, the variable will always be undefined. The `forEach` method is used to execute a provided function once for each array element. However, it's important to note that `forEach` does not return anything; it returns `undefined`.*/

const values = coding.forEach((item) => {
  //console.log(item); =>
  /*js
  ruby
  java
  python
  cpp*/
  return item; //The return statement inside the forEach does nothing because forEach does not capture returned values from the callback function.
});

//console.log(values); => undefined

/* hmesha ye zruri nahi hai ki hmein values log hi krani ho, ho skta hai hm values ko return krana chahte ho ya unka kuch or use krna chahte ho, aise mein hm filter ka use kr skte hai, `filter` and `forEach` are both array methods in JavaScript, but they serve different purposes and behave differently:

1. Purpose:
   - `filter`: The primary purpose of `filter` is to create a new array that contains a subset of the elements of the original array, based on a test in the provided function. It's used for filtering an array based on a condition.
   - `forEach`: The `forEach` method is used to execute a function once for each element in an array. It's typically used for executing side effects (like logging to the console or updating an external variable).

2. Return Value:
   - `filter`: Returns a new array containing all elements that pass the test implemented by the provided function. If no elements pass the test, it returns an empty array.
   - `forEach`: Does not return a value (returns `undefined`). It's used solely for side effects.

3. Modifying the Original Array:
   - `filter`: Does not modify the original array. It returns a new array based on the condition provided.
   - `forEach`: Also does not modify the original array unless the provided function explicitly does so (like changing an element’s value).

4. Usage Examples:
   - `filter`: Used when you want to select elements from an array that meet certain criteria. For example, filtering out numbers greater than a certain value.
   - `forEach`: Used when you want to do something with each element of the array, like logging each element to the console or applying a function to each element that causes a side effect (e.g., updating a global variable or UI).

### Example to Illustrate the Difference:
*/
const numbers = [1, 2, 3, 4, 5];

// Using filter to get numbers greater than 3
const filteredNumbers = numbers.filter((number) => number > 3);

//console.log(filteredNumbers); => [4, 5]

// Using forEach to log each number
//numbers.forEach((number) => console.log(number));=> 1 2 3 4 5 (logged individually)

/*In this example, `filter` is used to create a new array with numbers greater than 3, while `forEach` is used to execute a function (logging) on each element of the original array.*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num) => num > 4); => we can use a shorter arrow function syntax without the curly braces and the return statement if the function body consists of a single expression.
//console.log(newNums); => [ 5, 6, 7, 8, 9, 10 ]

/*const newNums = myNums.filter((num) => { 
  num > 4;
});*/
//console.log(newNums); => [], there's a small mistake in the callback function passed to filter. The function is missing a return statement, so it doesn't return anything (implicitly returns undefined), and as a result, no elements pass the filter condition.

/*const newNums = myNums.filter((num) => {
  return num > 4;
});*/

//console.log(newNums); => [ 5, 6, 7, 8, 9, 10 ], when we start the scope of a function then it becomes necessary to write the return keyword, only then we get the correct output.

//AGAR SCOPE OPEN KRTE HAI TO RETURN KEYWORD USE KRNA PDTA HAI, OR AGR SCOPE OPEN NAHI KRTE HAI TO STATEMENT/CONDITION DIRECTLY LIKH SKTE HAI.

//Agr hmein yhi same chij forEach se krni hai to aise krenge

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

//console.log(newNums); => [ 5, 6, 7, 8, 9, 10 ], forEach mein hmein thoda zyada logic lgana pda, but output same aaya as filter

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//const userBooks = books.filter((bk) => bk.genre === "History");

//console.log(userBooks); =>
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]*/

/*let userBooks = books.filter((bk) => {
  bk.publish >= 2000;
});*/
//console.log(userBooks); => [], we got an empty array bcoz we started the scope but didn't wrote return keyword.

let userBooks = books.filter((bk) => {
  return bk.publish >= 2000;
});

//console.log(userBooks); => we got the correct output after we wrote the return keyword.
/*[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]*/

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
//console.log(userBooks); =>
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]*/
