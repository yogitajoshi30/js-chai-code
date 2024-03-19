// let myName = "hitesh     ";
// let mychannel = "chai     ";

//console.log(myName.trueLength);//=> undefined
//the above variables have values with extra spaces and if we want to trim those spaces, we can use the trim property but we are gonna check if we can create a property by ourselves, so we tried to apply a property named trueLength (which is not a default property in javascript) on the variable myName, and we got undefined as our o/p.

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
}; //Adding a method to the prototype of object, which means that we can use 'hitesh' method on every object, and as we know that object is the parent of  array, string and functions  and all of them are objects as well so they can also use 'hitesh' method.

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`); //Adding a method to the prototype of Array, but now we can use the 'heyHitesh' method  only on arrays, we can't use it on objects bcoz  object is the parent of array, and the parent can't inherit the methods of its child.
};

//heroPower.hitesh(); //=> hitesh is present in all objects
//myHeros.hitesh();//=> hitesh is present in all objects
//myHeros.heyHitesh();//=> Hitesh says hello
//heroPower.heyHitesh();//=> heroPower.heyHitesh is not a function

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // TASupport k andar m TeachingSupport ko access kr pau uske liye __proto__ ka use krte hai
};

// Old syntax
//Teacher.__proto__ = User; //zruri ni hai ki object k andar hi __proto__ ka use kre, aise bhi kr skte hai, yha pe hmne Teacher ko User ka access de diya hai

// Modern syntax
//Object.setPrototypeOf(TeachingSupport, Teacher); //yha hmne TeachingSupport ko Teacher ka access de diya hai

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength(); //=> ChaiAurCode, becoz anotherUsername called trueLength property and anotherUsername's value was ChaiAurCode
//True length is: 11
"hitesh".trueLength(); //=> hitesh, this is when we didn't stored the value in any variable, and it called the trueLength property, then there 'this' means that value which called the property
//True length is: 6
"iceTea".trueLength(); //=> iceTea, this is also the same as above
//True length is: 6
