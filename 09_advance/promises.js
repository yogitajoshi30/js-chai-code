/*In JavaScript, a promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more effectively, especially when dealing with callbacks.

Promises have three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.

Promises have methods to handle these states:

then(): Allows you to specify what to do when a promise is fulfilled.
catch(): Allows you to specify what to do when a promise is rejected.
finally(): Allows you to specify what to do regardless of whether the promise is fulfilled or rejected.*/

//Creating a Promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete"); //=> Async task is compelete
    //resolve(); => Agr hm yha pe resolve nahi likhege to resolve or then connect nahi honge or hmein ye bhi pta ni chlega ki promise resolve hua ya ni
    resolve(); //=>Async task is compelete, Promise consumed=> ab hmne resolve likha or hmein uska o/p bhi mil gya hai to hmein pta chl gya hai ki hmara promise resolve ho gya hai
  }, 1000);
});

//Consuming a Promise
promiseOne.then(function () {
  console.log("Promise consumed"); //=> then is directly connected to resolve, so ye tb work krta hai jb promise resolve hota hai, but resolve or then ko connect krne k liye hmein promise create krte hue resolve ko call krna pdta hai jse hmne promiseOne mein kra and then yha pe promiseOne pe .then lga k use consume kr liya
});

// Another way to create and consume promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//3rd way to create and consume promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
}); //ismein hmne resolve mein kuch data pass kraya jo hm .then krana chahte hai, or kyuki resolve or then ka connection hai to hmne .then k function mein us data ko user krke le liya and then console log kra liya or hmein vo data mil gya

promiseThree.then(function (user) {
  console.log(user); //=> { username: 'Chai', email: 'chai@example.com' }
});

//4th way to create and consume promise
//ismein hmne ek error variable bhi de diya hai jo ki true hai, and then condition check ki hai if there is no error then it will be resolved else rejected
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
//yha hmne promise consume krne k liye .then , .catch and .finally use kiye hai, or fir hmne resolve se jo data pass kra tha usse first vale .then mein callback function k through  user liya hai fir first vale .then se user.username return kraya hai to uske liye .then ki chaining ki hai, fir second vale .then mein lene k liye again callback function k through username liya hai and then console log kra diya fir .catch hai usmein hmne reject se jo message pass kra hai vo error mein aa gya hai, agr error true hai to, and fir finally hai jo ki chlta hi chlta hai bhale hi .then chle na chle ya .catch chle na chle.
promiseFour
  .then((user) => {
    console.log(user); //=> { username: 'hitesh', password: '123' }
    return user.username;
  })
  .then((username) => {
    console.log(username); //=> hitesh
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//5th way to create and consume promise
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

//ab hmne async await ka use kiya hai to consume the promise, or ismein hm try and catch block ka use krte hai, try block mein vo aayega jo resolve se pass hua hoga and catch mein vo aayega jo reject se pass hoga.
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response); //=> { username: 'javascript', password: '123' }
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//6th way to create and consume promise
//n JavaScript, the fetch() function is used to make asynchronous HTTP requests to fetch resources from a network. It returns a Promise that resolves to the Response object representing the response to the request. In this example , we used fetch with async await.
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //JSON also takes sometime so that's why we've added await before response.json
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

//7th way to create and consume promise
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.*/
