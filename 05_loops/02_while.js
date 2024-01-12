let index = 0;
while (index <= 10) {
  //console.log(`Value of index is ${index}`); =>
  /*Value of index is 0
  Value of index is 2
  Value of index is 4
  Value of index is 6
  Value of index is 8
  Value of index is 10
*/
  index = index + 2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`); =>
  /*Value is flash
  Value is batman
  Value is superman*/
  arr = arr + 1;
}

let score = 11;

do {
  //console.log(`Score is ${score}`); => Score is 11
  score++;
} while (score <= 10);
//The do...while loop is similar to the while loop, except that the do...while loop will always execute the block of code once, before checking if the condition is true, then it will repeat the loop as long as the specified condition is true.
