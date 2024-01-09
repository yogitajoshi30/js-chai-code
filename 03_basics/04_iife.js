// Immediately Invoked Function Expressions (IIFE)
//An Immediately Invoked Function Expression (IIFE) in JavaScript is a design pattern used to execute a function as soon as it is defined. It is a common approach to encapsulate code within a local scope, creating a private namespace for variables that won't pollute the global scope and won't conflict with other code in a larger application.

//Here is the basic syntax of an IIFE:

/*(function() {
    // Code goes here
})();*/

//Or, if you want to pass arguments to the IIFE:

/*(function(a, b) {
    // Code that uses 'a' and 'b'
})(arg1, arg2);*/

//In these examples, the function is defined between the first set of parentheses and is immediately executed by the second set. This pattern is especially useful in situations where you want to create a scope for your variables and functions which doesn't leak into the global scope, thereby avoiding potential conflicts with other scripts and variables.

/*function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}() => }() SyntaxError: Unexpected token ')' */

/*(function chai() {
  // named IIFE => yha pe hmne iife ko naam diya hai chai to ye named iife hai
  console.log(`DB CONNECTED`); => DB CONNECTED
})(); upar vale function mein or is vale function mein ye difference hai ki usmein hmne function define krne se pehle parentheses nahi
lgaya or ismein lgaya hai*/

/*((name) => {
    //ye arrow function se bnaya hai, same hoga ye bhi
  console.log(`DB CONNECTED TWO ${name}`); => DB CONNECTED TWO yogita
})("yogita");*/
