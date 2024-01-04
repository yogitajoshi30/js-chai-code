//Functions

//console.log("Y"); => Y
//console.log("O"); => O
//console.log("G"); => G
//console.log("I"); => I
//console.log("T"); => T
//console.log("A"); => A
//agr hmein yhi kaam baar baar krana ho to use easily krane k liye hm functions ka use krte hai

//Function definition => A function in JavaScript is defined using the function keyword, followed by the function's name, a set of parentheses () which can contain parameters, and a set of curly braces {} which contain the function's body.

function sayMyName() {
  console.log("Y");
  console.log("O");
  console.log("G");
  console.log("I");
  console.log("T");
  console.log("A");
}
// sayMyName => parentheses nhi lgayenge to reference
//sayMyName(); => parentheses lgayenge to execution=>
//Y
//O
//G
//I
//T
//A

/*function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}*/

//addTwoNumbers(); => NaN (because we didn't passed the arguments)
//addTwoNumbers(10, 4); => 14
//addTwoNumbers(8, "a"); => 8a
//addTwoNumbers(8, "4"); => 84
//addTwoNumbers(8, null); => 8

//const result = addTwoNumbers(3, 5); => 8, jb hm function ko result variable mein store kra re hai to ye output aari hai, because yha pe hmne function ko call kra hai with parameters, fir hmara function run ho rha hai or uske andar console krne ko bola hai jo ki hmein 8 de rha hai

//console.log("Result: ", result); => Result:  undefined , jb hmne result ko console kraya to undefined aaya because jb hmne function ko call kra to usne kuch return nahi kra, bs console kra, jis vjh se result mein koi value nahi aayi

function addTwoNumbers(number1, number2) {
  //let result = number1 + number2;
  //return result;
  return number1 + number2; //bina variable mein store kraye bhi return kr skte hai
}

const result = addTwoNumbers(3, 5);
//console.log("Result: ", result); => Result:  8, yha jb hmne result ko console kraya to output 8 aayi, vo isliye kyuki result variable mein hmne function ko call kra hai with parameters, fir function run hua, usmein hmne result variable mein dono numbers ki addition kra di, and then use return kr diya which gave us 8 as output

function loginUserMessage(username = "yogi") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("yogita")); => yogita just logged in

//console.log(loginUserMessage()); => Please enter a username
//console.log(loginUserMessage()); => yogi just logged in, ye output isliye mila because ab hmne function k parameter ko default value de di hai jo ki tb chlegi jb hm use koi argument pass nahi kra re honge
//console.log(loginUserMessage("vanshika")); => vanshika just logged in, yha mne argument pass kr diya to default value ni chli

/*function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));*/
