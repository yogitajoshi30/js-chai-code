const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNumbers.map((num) => num + 10); => without parentheses or braces
//console.log(newNums); =>
/*[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
]*/

/*const newNums = myNumbers.map((num) => { 
  num + 10; => without return keyword
});*/

//console.log(newNums); =>
/*[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]*/

const newNums = myNumbers.map((num) => {
  return num + 10; //with braces and with return keyword
});
//console.log(newNums); =>
/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/

const newNum = [];

myNumbers.forEach((num) => {
  newNum.push(num + 10);
});
//console.log(newNum); =>
/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/

//This is called chaining, or chaining hm kitni bhi lambi kr skte hai. Chaining mein sbse pehle vali chain mein jo values chnge hoti hai vo next chain mein transfer ho jati hai

const newNumbers = myNumbers
  .map((num) => num * 10)
  /*[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]*/
  .map((num) => num + 1)
  /*[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]*/
  .filter((num) => num >= 40);
/*[
  41, 51,  61, 71,
  81, 91, 101
]*/

console.log(newNumbers);
