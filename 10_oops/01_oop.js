const user = {
  username: "yogita",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    //console.log(`Username: ${username}`); //=> username is not defined, we got this o/p because it don't know that which username are we talking about, because the username property is defined outside the function.
    //console.log(`Username: ${this.username}`); //=>Username: yogita, now we got the username bcoz we used 'this' keyword with username, which  refers to the context in which a function is executed, and so now it understood that which username are we talking about.
    //console.log(this);//=>
    /*{
        username: 'yogita',
        loginCount: 8,
        signedIn: true,
        getUserDetails: [Function: getUserDetails]
    }*/
  },
};

//console.log(user.username); //=> yogita

//console.log(user.getUserDetails()); //=> Got user details from database

//When 'this' is used outside of any function, it refers to the global object (window in a browser, global in Node.js).

//console.log(this);//=> {}, in Node.js

//console.log(this === window); // true in a browser

/*
CONSTRUCOR FUNCTION=>
In JavaScript, constructor functions are a way to create objects with properties and methods. They are essentially templates for creating multiple similar objects. When you create an object using a constructor function, you're essentially creating an instance of that object type.

Here's a basic example of a constructor function in JavaScript:

// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances of Person using the 'new' keyword
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

// Accessing properties of instances
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25

In this example:

1. We define a constructor function Person which takes two parameters: name and age.
2. Inside the constructor function, this refers to the object being created. We set properties name and age of the object to the values passed as arguments.
3. We create two instances of the Person object using the new keyword, passing different values for name and age.
4. We then access properties of these instances using dot notation (person1.name, person2.age).
*/

/*In JavaScript, the new keyword is used to create instances of user-defined objects. When you declare a function with the function keyword and then use new to call that function, it constructs a new object and sets the this keyword to refer to that newly created object within the function's scope. This allows you to create multiple instances of objects with similar properties and methods.*/

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // return this; => we don't have to write this necessarily, it is here by deafult
}

//const userOne = User("hitesh", 12, true);

//console.log(userOne); => username: 'hitesh',  loginCount: 12,  isLoggedIn: true

//const userTwo = User("ChaiAurCode", 11, false);

//console.log(userOne); //=> username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false, here we can see that the userOne values have got overwritten by userTwo, and to avoid this problem, we use the 'new' keyword.

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne); //=> User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
//console.log(userTwo); //=> User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }
console.log(userOne.constructor); //=> [Function: User]
