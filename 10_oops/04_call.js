//WRONG WAY OF CALL
/*
function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called"); //=> called
}

function createUser(username, email, password) {
  SetUsername(username);
  this.email = email;
  this.password = password;
}

const chaii = new createUser("chai", "chai@fb.com", "123");

console.log(chaii); //=> createUser { email: 'chai@fb.com', password: '123' }
*/

//RIGHT WAY OF CALL
/*In your code, you're attempting to create a new user object using the `createUser` function, which internally calls the `SetUsername` function to set the username. However, the way you're calling `SetUsername` will not work as expected because you're losing the context of `this`. You need to bind the context properly or use other methods to make it work. 

Here's a corrected version of your code:*/

function SetUsername(username) {
  this.username = username;
  console.log("called"); //=> called
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // Use call to set the context correctly
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); //=> createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

/*In this corrected version, `SetUsername.call(this, username)` ensures that `this` inside `SetUsername` refers to the same object that `createUser` is operating on. So, the username will be correctly set in the newly created `chai` object.

Now, when you run `console.log(chai)`, you'll get an object with the username, email, and password properties set accordingly.*/
