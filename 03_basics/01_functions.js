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

/*function calculateCartPrice(num1) {
  return num1;
}*/
//agr hm koi e-commerce website build krte hai to usmein hmein pta nahi hota hai ki user kitne number of items add krne vala hai, to aise mein hmein sare items ka price add krna hota hai to jb bhi hmein ye nahi pta hoga ki kitne number of arguments aane vale hai to aise mein hmein apne parameters ready krne hote hai,

//console.log(calculateCartPrice(200)); => 200, yha hmne single argument pass kra or parameter bhi single hi tha to ye output aaya
//console.log(calculateCartPrice(200, 400, 500, 2000)); => 200, yha hmne multiple argument pass kre, but parameter single tha to first argument hi print hua

/*function calculateCartPrice(...num1) {
  //(...=> rest operator)
  return num1;
}*/

//console.log(calculateCartPrice(200, 400, 500, 2000)); => [ 200, 400, 500, 2000 ], ab sare arguments ek array ke andar aa gye, because upar hmne num1 pe rest operator lga diya, jo ki multiple arguments ko bind krke ek array mein hmein de deta hai. Rest operator or spread operator ko same way se likha jata hai, i.e., ... , bs iske usecase pe depend krta hai ki kb ise rest bolna hai or kb spread

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 2000)); => [ 500, 2000 ] , yha pe upar hmne parameter mein val1, or val2 di to 200 val1 mein chla gya or 400 val2 mein, baki k bache hue arguments num1 mein chle gye

/*const user = {
  username: "Yogita",
  age: 22,
};*/

/*function handleObject(anyobject) {
  //function k parameter mein hmne anyobject likha taki hm usmein koi bhi object pass kr ske
  console.log(
    `Username is ${anyobject.username} and age is ${anyobject.age}` // => Username is Yogita and age is 22
  );
}*/

//handleObject(user); => function ko call krte time hmne usmein us object ka name pass kraya jismein se hm values lena chahte hai

/*function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and age is ${anyobject.age}` // => Username is sam and age is 38
  );
}*/

/*handleObject({
  username: "sam",
  age: 38,
});*/ // yha pe hmne object specially na bnake function ko call krte time hi bna diya hai,

//Array bhi ek dm object ki hi trh hai
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

//console.log(returnSecondValue(myNewArray)); => 400
console.log(returnSecondValue([200, 400, 500, 1000])); // => 400
