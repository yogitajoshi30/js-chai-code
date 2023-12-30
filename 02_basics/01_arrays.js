// Array

const myArr = [0, 1, 2, 3, 4, 5]; //ye numbers ka array hai
const myHeors = ["shaktiman", "naagraj"]; //ye strings ka array hai

const myArr2 = new Array(1, 2, 3, 4); //ye array bnane ka alag way hai, ismein hmne new krke array bnaya hai, or ismein hmein square brackets bhi nahi lgane pdte, parentheses mein hi elements likh skte hai, square bracket vo automatically lga leta hai

// console.log(myArr[1]); => 1

// Array methods

// myArr.push(6) => ye push function hai, ismein hmein ek value pass krani pdti hai jo hm array ke end mein push krna chahte hai
// myArr.push(7)
// myArr.pop() => ye pop function hai, ismein hmein koi value pass ni krani pdti, ye array ke end mein jo value hoti hai use pop kr leta hai

// myArr.unshift(9) => ye unshift function hai, ismein bhi hmein value pass krani pdti hai, bs ye value ko array ke start mein daal deta hai.
// myArr.shift() => ye shift function hai, ismein koi value ni deni pdti, or ye array ke start se value nikal leta hai

// console.log(myArr.includes(9)); =>includes method true ya false mein answer deta hai, isse hm pta kr skte hai ki jo value hmne pass kri hai vo us array mein exist krti hai ya ni

// console.log(myArr.indexOf(3)); => indexOf method us element ka index btata hai jo hm pass krte hai, agr vo us array mein exist krta hai to index btata hai vrna -1 deta hai

// const newArr = myArr.join() => ye array ke sare elements ko string mein add krata hai

// console.log(myArr); => [0, 1, 2, 3, 4, 5]
// console.log( newArr); => 0, 1, 2, 3, 4, 5

//console.log(typeof newArr) => string (to isse hmein ye pta chl gya ki join method se hm array ko string bna lete hai)

// slice, splice

// const myArr = [0, 1, 2, 3, 4, 5];

console.log("A ", myArr); //=>A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3); //The slice method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements. The original array is not modified by the slice operation. The starting index at which to begin the extraction, and the ending index before which to stop the extraction. The slice method extracts up to, but not including, the element at this index. The slice method does not modify the original array; it returns a new array with the specified elements.

console.log(myn1); // => [ 1, 2 ]
console.log("B ", myArr); // => B  [ 0, 1, 2, 3, 4, 5 ] (yha hmare array vaisa ka vaisa hi hai)

const myn2 = myArr.splice(1, 3); //The splice method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the removed elements.

console.log(myn2); // => [ 1, 2, 3 ]
console.log("C ", myArr); //=>C  [ 0, 4, 5 ] (ismein hm dekh skte hai ki hmari given range thi 1 to 3, so isne index1 se leke index3 tk ke elements ko extract kr diya, yha hmara array modify ho gya hai)
