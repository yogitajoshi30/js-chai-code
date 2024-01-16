const user = {
  username: "yogita",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
}; //The 'this' keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used. Here, 'this' refers to the 'user' object. So, 'this.username' means 'user.username'.

user.welcomeMessage();

/* => yogita , welcome to website
{
    username: 'yogita',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}*/

//user.username = "sona";

user.welcomeMessage();

/* => sona , welcome to website
{
    username: 'sona',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}*/

//console.log(this); => {}
//Alone, this refers to the global object. In a browser, this when used alone refers to the window object. In Node.js, this refers to the global object in a global context.

function chai() {
  console.log(this);
}

//chai(); =>ye hmne function call kra then this console hua to ye output aaya=> Object [global] {ismein bhut kuch likha hua hai}

function chai() {
  let username = "yogita";
  console.log(this.username); // undefined, so hm dekh skte hai ki jo 'this' context hai vo hm object k andar hi use kr pa rahe hai, function k andar ye nahi chl raha hai
}

//chai();

const chai = function () {
  let username = "yogita";
  console.log(this.username); // => undefined, jb hmne function ko variable k andar hold kra tb bhi yhi aaya
};

//chai();

const chai = () => {
  //this is arrow function hai, ismein hmne function keyword nahi likha but parentheses lgaye hai, and uske baad arrow lgaya hai
  const add = (a, b) => a + b;
  //let username = "yogita";
  //console.log(this); => {}
  //console.log(this.username); undefined
};

//chai();

//+++++++++++++++++++All the ways to write an arrow function+++++++++++++++++++++++

/*1. const addTwo = (num1, num2) => {
  return num1 + num2;
}; */ //curly braces lgayenge to return keyword likhna hi pdega
//console.log(addTwo(3, 4)); => 7

//2. const addTwo = (num1, num2) => num1 + num2; bina parentheses ke bhi likh skte hai agr one line code hai to
//console.log(addTwo(3, 4)); => 7

//3. const addTwo = (num1, num2) => (num1 + num2); parentheses lagayenge to return keyword nahi likhna pdega
//console.log(addTwo(3, 4)); => 7

/*const addTwo = (num1, num2) => {
  username: "yogita";
};*/

//console.log(addTwo()); => undefined, because is trh se object return nahi kr skte, object ko return krne k liye usko parentheses mein wrap krna pdta hai

const addTwo = (num1, num2) => ({ username: "yogita" });

//console.log(addTwo()); => { username: 'yogita' }

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()
