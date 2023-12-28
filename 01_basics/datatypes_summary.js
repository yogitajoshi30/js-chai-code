//Primitive or non-primitive data types mein jo difference hai vo is basis pe kiya hai ki jitne bhi data hai vo memory mein kis trh se store hote hai or kis trh se data ko access kr skte hai.

//Primitive Data-type: ye call by value hote hai, mtlb k jb hm inhe kahi copy krte hai to inka jo memory ka original reference nahi diya jata, vo copy krke diya jata hai, to jo bhi changes hote hai vo copy mein hote hai.
/* 1.String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt */

const score = 100; //number
const scoreValue = 100.3; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123"); //symbol ka use uniqueness k liye krte hai, even though the values of id and anotherId are same, but when we check if they are same, we get false.

console.log(id === anotherId);

const bigNumber = 9876543211234456789n;

//Non-primitive or Reference Data-type: memory mein inka reference hmein directly allocate kiya ja skta hai.
/* 1. Array
2. Objects
3. Functions */

const heros = ["shaktiman", "nagraj", "doga"]; //array
let myObj = { name: "yogita", age: 22 }; //object
const myFunction = function () {
  console.log("Hello World");
}; //function

//sare non-primitive data-types ka data-type object hi bola jata hai, but function ka data-type object function bola jata hai.

// +++++++++++++++++++++++++++++++++++++++++++
//There are 2 types of memories:
//1. Stack Memory: Ye Primitive data-type mein use hoti hai. Jb bhi koi memory stack mein define hoti hai, to jo bhi variable hmne declare kra hota hai hmein uski ek copy milti hai.

let myYoutubename = "yogitajoshidotcom";
let anothername = myYoutubename;
anothername = "yogitajoshi";
console.log(anothername); // => yogitajoshi
console.log(myYoutubename); // => yogitajoshidotcom

//2. Heap Memory: Ye Non-Primitive data-type mein use hoti hai. Jb bhi ek memory heap ke andar define hoti hai, to isse hmein original value ka reference milta hai, mtlb jo bhi change hm krenge vo original value mein bhi hoga.

let userOne = {
  email: "user1@google.com",
  upi: "user@oksbi",
};
let userTwo = userOne;
userTwo.email = "user2@google.com";

console.log(userOne.email); // => user2@google.com
console.log(userTwo.email); // => user2@google.com
