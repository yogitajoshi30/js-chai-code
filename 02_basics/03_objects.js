//objects ko declare krne ke 2 ways hai
//1. literal
//2. constructor

//singleton => jb bhi hm constructor ki help se object  bnate hai to singleton banta hai, jiska mtlb hai ki apni trh ka ye ek hi object hota hai
//jb bhi hm literals ki help se object bnate hai to  singleton nahi banta hai

// Object literals

const mySym = Symbol("key1"); // symbol define

//object define:
const JsUser = {
  name: "Yogita",
  "full name": "Yogita Joshi", //yha pe hmne key ko string ki trh hi diya hai, to ab agr hmein ise access krna hoga to dot(.) vale way se nahi kr payenge, square brackets lga k access krna pdega
  [mySym]: "mykey1", //agr hmein symbol ko object mein as a key use krna ho to use square brackets mein rkhna pdta hai , key =>[Symbol(key1)]
  age: 22,
  location: "Haridwar",
  email: "yogita@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
//object mein keys or values hoti hai, left side mein keys, or right side mein values
//object mein jb hm keys dete hai to system keys ko string ki trh process krta hai
//object mein values kisi bhi type ki de skte hai, number, strings, boolean, arrays, objects

//how to access objects:
//1. console.log(JsUser.email) =>yogita@google.com
//2. console.log(JsUser[email]); =>email is not defined, agr hm is way se access krenge to hmein ise string ki trh call krna pdega

//3. console.log(JsUser["email"]) =>yogita@google.com
//4. console.log(JsUser["full name"]) => Yogita Joshi

//console.log(JsUser.mySym); => mykey1 , jb hm symbol ko . vale way se access krenge to vo o/p to vhi dega to bracket lga k dega but ye iske right syntax nahi hai
//console.log(typeof JsUser.mySym); => string , ye symbol ki value ka data type hai
//console.log(JsUser[mySym]); => mykey1 => symbol ko access krne ka right way ye hai
//console.log(typeof JsUser[mySym]); => the output of typeof will be one of the following strings:'undefined': If the property does not exist.'boolean', 'number', 'string', 'bigint', 'symbol', 'object', 'function': Depending on the type of the property value. Here the property value is string.

JsUser.email = "yogita@chatgpt.com"; //this styntax is used to change the value of a key in an object
//Object.freeze(JsUser); //agr hm chahte hai ki koi bhi object ki values ko chnge na kr paye to uske liye freeze ka use krte hai, ismein hmein us object ka name dena hota hai jise hm freeze krna chahte hai

JsUser.email = "yogita@microsoft.com"; //upar object freeze krne ke baad hm email ki value chnge krenge to vo ab chnge nahi hogi

// console.log(JsUser); => 'yogita@chatgpt.com' , ye pehle vali hi value hai

JsUser.greeting = function () {
  console.log("Hello JS user");
};
// console.log(JsUser.greeting); => [Function (anonymous)] , this is function returnback,  function execute nahi hua hai sirf function ka refernce aaya hai
//console.log(JsUser.greeting()); => Hello JS user

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
}; //agr hm same function ki properties ko access krna chahte hai to this. krke kr skte hai jse hmne upar kra this.name krke

console.log(JsUser.greeting()); //=> Hello JS user
console.log(JsUser.greetingTwo()); // => Hello JS user, Yogita
