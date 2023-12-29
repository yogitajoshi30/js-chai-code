const score = 400; //ismein hmne specially nahi bataya ki iska data type number hai
// console.log(score);

const balance = new Number(100); //but ismein hmne btaya hai ki ye number hi hai.
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); => Math ek object hai jiske andar kafi sari properties hai.
// console.log(Math.abs(-4)); => ye absolute function hai, -ve values ko +ve banata hai
// console.log(Math.round(4.6)); =>values ko round krke deta hai
// console.log(Math.ceil(4.2)); =>agr hm chahte hai ki number se upper value hi round off ho to ceil use krte hai
// console.log(Math.floor(4.9)); => agr hm chahte hai ki number se lower value hi round off ho to floor use krte hai
// console.log(Math.min(4, 3, 6, 8)); =>ye minimum value find krne k liye
// console.log(Math.max(4, 3, 6, 8)); =>ye maximum value find krne k liye

console.log(Math.random()); //=>ye hmesha 0 or 1 ke beech mein value deta hai.

console.log(Math.random() * 10 + 1); // => value hmesha 0 se badi aaye iske liye hmne Math.random() ko 10 se multiply kr diya, taki agr 0.44728939058574 aisi type koi value aaye to vo ek decimal shift hoke 4.4728939058574 ban jaye but agr Math.random() 0.0374778947 type koi value dede to 10 se multiply krke bhi koi benefit nahi hoga isliye hmne 1 bhi add kr diya, taki hmein hmesha 0 se bdi value hi mile.

console.log(Math.floor(Math.random() * 10) + 1); //=> Math.floor value ko lower value mein round off krne k liye

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
