/*The `reduce` method in JavaScript is a powerful array function that allows you to process each element of an array in order to reduce the array to a single value. It's often used for operations like summing all elements of an array, but it's flexible enough to handle a wide range of scenarios.

Here's a basic overview of how `reduce` works:

1. Callback Function: The `reduce` method takes a callback function as its first argument. This callback function is called on each element in the array.

2. Accumulator: The callback function takes at least two arguments: an accumulator (`acc`) and the current value (`currVal`). The accumulator is the value that's being accumulated as the result of the function. It's the value returned by the previous invocation of the callback, or the initial value if supplied.

3. Initial Value: The second argument to `reduce` is an optional initial value for the accumulator. If an initial value is not provided, the first element of the array is used as the initial accumulator value, and the callback is not called for the first element.

The general syntax is:
array.reduce(function(accumulator, currentValue), initialValue)

- accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
- currentValue: The current element being processed in the array.
- initialValue(optional): A value to use as the first argument to the first call of the callback.

### Example: Summing an Array of Numbers*/

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // Initial value for accumulator is 0
console.log(sum); // => 10

/*In this example, `reduce` is used to calculate the sum of all elements in the `numbers` array. The function starts with an accumulator value of 0, then adds each element of the array to this accumulator.

###Advanced Use

`reduce` can be used for more complex operations, such as converting an array into an object, performing calculations that depend on the array's elements, or even flattening nested arrays. The power of `reduce` comes from how you define the callback function and how you use the accumulator.*/

const myNums = [1, 2, 3];

/*const myTotal = myNums.reduce(function (acc, currval) { => with normal function
  //console.log(`acc: ${acc} and currval: ${currval}`); =>
  acc: 0 and currval: 1
  acc: 1 and currval: 2
  acc: 3 and currval: 3
  return acc + currval;
}, 0);*/

//console.log(myTotal); => 6

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0); //with arrow function
//console.log(myTotal); => 6

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const shoppingCartTotal = shoppingCart.reduce(
  (acc, item) => acc + item.price,
  0
); //callback funcn mein ek acc hai or ek item hai jo ki array mein present sare objects ko represent krra hai, to hmein sare item ka price add krna hai isliye acc mein item.price add kr diya, and acc ki initialValue 0 di hai hmne.

//console.log(shoppingCartTotal); => 22996
