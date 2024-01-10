//const userEmail = "yogita@yo.com"; => Got user email
//const userEmail = " "; => Got user email
//const userEmail = ""; => Don't have user email
const userEmail = []; //=> Got user email

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){} => Jo bhi chij hm "" k andar likhte hai vo truthy hoti hai, jse 0 , false, "" khud to falsy value hai but jb ismein space de dete hai to ye truthy ban jati hai

//console.log(false == 0); => true
//console.log(false == ""); => true
//console.log(0 == ""); => true

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//console.log(val1); => 5
//The expression 5 ?? 10 in JavaScript uses the nullish coalescing operator ??. This operator returns the right-hand operand (10) when the left-hand operand (5) is null or undefined. Otherwise, it returns the left-hand operand. In this case, since 5 is neither null nor undefined, the expression 5 ?? 10 will return 5. Therefore, the value of val1 will be 5, and console.log(val1); will output 5 to the console.

//val1 = null ?? 10;
//console.log(val1); => 10

//val1 = 10 ?? null;
//console.log(val1); => 10
//The expression 10 ?? null in JavaScript uses the nullish coalescing operator ??. This operator returns the right-hand operand (in this case, null) when the left-hand operand (in this case, 10) is null or undefined. Otherwise, it returns the left-hand operand. In this example, since 10 is neither null nor undefined, the expression 10 ?? null will return 10. Therefore, the value of val1 will be 10, and console.log(val1); will output 10 to the console.

//SIMPLE BAAT YE HAI KI JB LEFT-HAND-OPERAND NULL YA UNDEFINED HOGA TO YE RIGHT-HAND-OPERAND RETURN KREGA VRNA NORMALLY LEFT-HAND-OPERAND RETURN KREGA

//val1 = undefined ?? 15;
//console.log(val1); => 15

//val1 = null ?? 10 ?? 20;
//console.log(val1); => 10

// Ternary Operator
//In JavaScript, the ternary operator, also known as the conditional operator, allows you to write a shorthand conditional statement. It has the following syntax:

//condition ? expressionIfTrue : expressionIfFalse;

//Here's how it works:

//- `condition`: This is the condition that you want to evaluate. If it's `true`, the expression before the `?` is executed; otherwise, the expression after the `:` is executed.

//- `expressionIfTrue`: This is the value or expression that is returned if the condition is `true`.

//- `expressionIfFalse`: This is the value or expression that is returned if the condition is `false`.

let age = 25;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // => Yes, The Output is "Yes" because age is 25, which is greater than or equal to 18.
